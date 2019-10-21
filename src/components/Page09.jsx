import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadio from "./InputRadio";
import "../css/checkboxInputPage9.css"
import pr1 from "../media/present/01.png";
import pr2 from "../media/present/02.png";
import pr3 from "../media/present/03.png";
import pr4 from "../media/present/04.png";


const Page09 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 9 из 9. Нам 6 лет! Акция до 23 октября
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4 ">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '99%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center mb-3'>{props.state.userInfo.first_name}, выберите Ваш
                подарок</h2></div>
            <div className="w-100 text-center">
                <div className="inputContainer">
                    <InputRadio changeInput={props.setPresent} header="Набор ножей Malta" img={pr1} name="present"
                                value="present1" id="Набор ножей Malta" checked={props.state.orderInfo.present}/>
                    <InputRadio changeInput={props.setPresent} header="Набор посуды Optimum" img={pr2} name="present"
                                value="present2" id="Набор посуды Optimum" checked={props.state.orderInfo.present}/>
                    <InputRadio changeInput={props.setPresent} header="Сушка для посуды" img={pr3} name="present"
                                value="present3" id="Сушка для посуды" checked={props.state.orderInfo.present}/>
                    <InputRadio changeInput={props.setPresent} header="Сертификат до 5000 р." img={pr4} name="present"
                                value="present4" id="Сертификат до 5000 р." checked={props.state.orderInfo.present}/>
                </div>
            </div>
            {props.state.isСonsent ? <button className="buttonGo" onClick={() => {
                    props.setForms(props.state.orderInfo, props.state.userInfo)
                }}>Получить расчет стоимости кухни и забронировать подарок</button> :
                <button disabled className="buttonGo">Получить расчет стоимости кухни и забронировать подарок</button>}
            <div className="text-center consentText">
                <input className="consentInput" type="checkbox" id="consent" checked={props.state.isСonsent}
                       onChange={props.setСonsent}/>
                <label htmlFor="consent" className="consentInputLabel"/>
                <label className="pointer mb-0" htmlFor="consent"> Я принимаю </label> <a
                href="https://vk.com/page-19542789_53648424"> условия передачи информации </a>
            </div>
            <NavLink to="/page07" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page09;