import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../App';
import { RHFInput } from 'react-hook-form-input';

const Form = () => {

    const { state, dispatch } = useContext( Context );
    const [ value, setValue ] = useState('')
    const { reset, register, handleSubmit, watch, errors } = useForm();
    const buttonLabel = state.mode.type === 'add' ? 'Aggiungi' : 'Modifica'

    let inputValue = state.mode.type === 'add' ? '' : state.items.find( item => item.id === state.mode.id )?.title;


    const onSubmit = data => {
        const unixTime = Math.floor(Date.now() / 1000);

        const type  = state.mode.type === 'add' ? 'ITEMS_ADD' : 'ITEMS_EDIT'
        const id    = state.mode.type === 'add' ? unixTime   : state.mode.id

        dispatch({
            type,
            payload : {
                id,
                title : data.item
            }
        })

        if(state.mode.type === 'edit'){
            dispatch({
                type : 'MODE_ADD',
                payload : {}
            })
        }

        reset({
            item: ''
        });

    }

    const onChange = args => ({
        value: args[0].nativeEvent.text,
      });


    const onClose = e => {
        return;
    };

    console.log('inputValue', inputValue );

    return (<div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <RHFInput
                        register={register}
                        setValue={setValue}
                        as={<input />}
                        name="item"
                        value={inputValue}
                    />
                    <button type="submit" type="primary" size={"large"} style={{ width: "100%" }}>{buttonLabel}</button>
                    {errors.item && <p>Questo campo è obbligatorio</p> }
                </form>
            </div>);
}

export default Form;