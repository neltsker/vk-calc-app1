import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadio from "./InputRadio";
import facade01 from "../media/facade/01.png"
import facade02 from "../media/facade/02.jpg"
import facade03 from "../media/facade/03.jpg"
import facade04 from "../media/facade/04.png"
import facade05 from "../media/facade/05.jpg"
import facade07 from "../media/facade/07.png"


const Page03 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 3 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '36%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Какие фасады вам нравятся больше?</h2></div>
            <div className="inputContainer">
                <InputRadio changeInput={props.setFacade} header="Акрил" img={facade01} name="facade" value="facade1"
                            id="Акрил" checked={props.facade}/>
                <InputRadio changeInput={props.setFacade} header="МДФ-пленка" img={facade02} name="facade"
                            value="facade2" id="МДФ-пленка" checked={props.facade}/>
                <InputRadio changeInput={props.setFacade} header="МДФ-пластик" img={facade03} name="facade"
                            value="facade3" id="МДФ-пластик" checked={props.facade}/>
                <InputRadio changeInput={props.setFacade} header="МДФ-эмаль" img={facade04} name="facade"
                            value="facade4" id="МДФ-эмаль" checked={props.facade}/>
                <InputRadio changeInput={props.setFacade} header="Массив" img={facade05} name="facade" value="facade5"
                            id="Массив" checked={props.facade}/>
                <InputRadio changeInput={props.setFacade} header="Не знаю" img={facade07} name="facade" value="facade7"
                            id="Не знаю" checked={props.facade}/>
            </div>
            <NavLink to="/page04" className="buttonGo"> Перейти к шагу 4</NavLink>
            <NavLink to="/page02" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page03;