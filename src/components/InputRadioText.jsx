import React from 'react';

const InputRadioText = (props) => {
    let checked = props.checked === props.id ? true : false;
    return (
        <label className='row ml-1 pointer' htmlFor={props.id}>
            <div className='inputRadioSell mr-2'>
                <input className="inputRadio" type="checkbox" name="size"
                       id={props.id} checked={checked} onChange={() => {
                    props.changeInput(props.id)
                }}/>
                <label htmlFor={props.id} className="insteadRadio"> </label>
            </div>
            <label htmlFor={props.id} className='align-self-center textLabelRadioInput'>{props.text}</label>
        </label>
    );
};

export default InputRadioText;


