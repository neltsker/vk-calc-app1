import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadioText from "./InputRadioText";


const Page08 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 8 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4 ">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '94%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center mb-3'>Удобный способ оплаты?</h2></div>
            <div className="w-100 text-center">
                <div className="inputTextContainer ">
                    <InputRadioText changeInput={props.setPaymentMethod} text="Наличными 100%" name="paymentMethod1"
                                    value="paymentMethod1" id="Наличными 100%" checked={props.paymentMethod}/>
                    <InputRadioText changeInput={props.setPaymentMethod} text="Оплата 50/50" name="paymentMethod2"
                                    value="paymentMethod2" id="Оплата 50/50" checked={props.paymentMethod}/>
                    <InputRadioText changeInput={props.setPaymentMethod}
                                    text="Рассрочка без банков и без %, на 6 месяцев" name="paymentMethod3"
                                    value="paymentMethod3" id="Рассрочка без банков и без %, на 6 месяцев"
                                    checked={props.paymentMethod}/>
                    <InputRadioText changeInput={props.setPaymentMethod} text="Оплата со счета Юр. лица"
                                    name="paymentMethod4" value="paymentMethod4" id="Оплата со счета Юр. лица"
                                    checked={props.paymentMethod}/>
                    <InputRadioText changeInput={props.setPaymentMethod} text="Кредит до 36 месяцев"
                                    name="paymentMethod5" value="paymentMethod5" id="Кредит до 36 месяцев"
                                    checked={props.paymentMethod}/>
                </div>
            </div>
            <NavLink to="/page09" className="buttonGo"> Перейти к шагу 9</NavLink>
            <NavLink to="/page07" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page08;