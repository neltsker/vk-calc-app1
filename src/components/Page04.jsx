import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadio from "./InputRadio";
import WT01 from "../media/worktopType/01.jpg";
import WT02 from "../media/worktopType/02.jpg";
import WT03 from "../media/worktopType/03.jpg";
import WT04 from "../media/worktopType/04.png";


const Page04 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 4 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '48%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Выберите тип столешницы</h2></div>
            <div className="inputContainer">
                <InputRadio changeInput={props.setWorktopType} header="МДФ и ДСП (26мм)" img={WT01} name="worktopType"
                            value="worktopType1" id="МДФ и ДСП (26мм)" checked={props.worktopType}/>
                <InputRadio changeInput={props.setWorktopType} header="МДФ и ДСП (38мм)" img={WT02} name="worktopType"
                            value="worktopType2" id="МДФ и ДСП (38мм)" checked={props.worktopType}/>
                <InputRadio changeInput={props.setWorktopType} header="Искуственный камень" img={WT03}
                            name="worktopType" value="worktopType3" id="Искуственный камень"
                            checked={props.worktopType}/>
                <InputRadio changeInput={props.setWorktopType} header="Не могу выбрать" img={WT04} name="worktopType"
                            value="worktopType4" id="Не могу выбрать" checked={props.worktopType}/>
            </div>
            <NavLink to="/page05" className="buttonGo"> Перейти к шагу 5</NavLink>
            <NavLink to="/page03" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page04;