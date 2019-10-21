import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadioText from "./InputRadioText";


const Page07 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 7 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '84%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center mb-3'>В какой бюджет планируете уложиться?</h2></div>
            <div className="w-100 text-center">
                <div className="inputTextContainer ">
                    <InputRadioText changeInput={props.setBudget} text="До 20 000 руб." name="budget1" value="budget1"
                                    id="До 20 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 30 000 - 40 000 руб." name="budget2"
                                    value="budget2" id="От 30 000 - 40 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 50 000 - 60 000 руб." name="budget3"
                                    value="budget3" id="От 50 000 - 60 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 70 000 - 80 000 руб." name="budget4"
                                    value="budget4" id="От 70 000 - 80 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="Более 90 000 руб." name="budget5"
                                    value="budget5" id="Более 90 000 руб." checked={props.budget}/>
                </div>
            </div>
            <NavLink to="/page08" className="buttonGo"> Перейти к шагу 8</NavLink>
            <NavLink to="/page06" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page07;