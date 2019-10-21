import React from 'react';
import {NavLink} from "react-router-dom";
import img01 from "../media/layout/01.png"
import img02 from "../media/layout/02.png"
import img03 from "../media/layout/03.png"
import img04 from "../media/layout/04.png"
import InputRadio from "./InputRadio";


const Page01 = (props) => {
    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 1 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '12%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Какой планировки Ваша кухня?</h2></div>
            <div className="inputContainer">
                <InputRadio changeInput={props.changeInput} header="Прямая" img={img01} name="layout" value="layout1"
                            id="Прямая" checked={props.layout}/>
                <InputRadio changeInput={props.changeInput} header="Угловая" img={img02} name="layout" value="layout2"
                            id="Угловая" checked={props.layout}/>
                <InputRadio changeInput={props.changeInput} header="П-образная" img={img03} name="layout"
                            value="layout3" id="П-образная" checked={props.layout}/>
                <InputRadio changeInput={props.changeInput} header="Остравная" img={img04} name="layout" value="layout4"
                            id="Остравная" checked={props.layout}/>
            </div>
            <NavLink to="/page02" className="buttonGo"> Перейти к шагу 2 ></NavLink>
        </div>
    );
};

export default Page01;