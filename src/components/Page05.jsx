import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadio from "./InputRadio";
import h01 from "../media/hardwareClass/01.png";
import h02 from "../media/hardwareClass/02.png";
import h03 from "../media/hardwareClass/03.png";
import h04 from "../media/hardwareClass/04.png";


const Page05 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 5 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '60%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Выберите класс фурнитуры</h2></div>
            <div className="inputContainer">
                <InputRadio changeInput={props.setHardwareClass} header="Эконом" img={h01} name="hardwareClass"
                            value="hardwareClass1" id="Эконом" checked={props.hardwareClass}/>
                <InputRadio changeInput={props.setHardwareClass} header="Стандарт" img={h02} name="hardwareClass"
                            value="hardwareClass2" id="Стандарт" checked={props.hardwareClass}/>
                <InputRadio changeInput={props.setHardwareClass} header="Премиум" img={h03} name="hardwareClass"
                            value="hardwareClass3" id="Премиум" checked={props.hardwareClass}/>
                <InputRadio changeInput={props.setHardwareClass} header="Не знаю" img={h04} name="hardwareClass"
                            value="hardwareClass4" id="Не знаю" checked={props.hardwareClass}/>
            </div>
            <NavLink to="/page06" className="buttonGo"> Перейти к шагу 6</NavLink>
            <NavLink to="/page04" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page05;