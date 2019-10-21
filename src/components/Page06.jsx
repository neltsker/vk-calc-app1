import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadioText from "./InputRadioText";


const Page06 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 6 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '72%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center mb-3'>Когда планируете установку кухни?</h2></div>
            <div className="w-100 text-center">
                <div className="inputTextContainer ">
                    <InputRadioText changeInput={props.setInstallationDate} text="Все готово, хоть завтра!"
                                    name="installationDate1" value="installationDate1" id="Все готово, хоть завтра!"
                                    checked={props.installationDate}/>
                    <InputRadioText changeInput={props.setInstallationDate} text="В этом месяце"
                                    name="installationDate2" value="installationDate2" id="В этом месяце"
                                    checked={props.installationDate}/>
                    <InputRadioText changeInput={props.setInstallationDate} text="В течение 3-х месяцев"
                                    name="installationDate3" value="installationDate3" id="В течение 3-х месяцев"
                                    checked={props.installationDate}/>
                    <InputRadioText changeInput={props.setInstallationDate} text="В течение 6 месяцев"
                                    name="installationDate4" value="installationDate4" id="В течение 6 месяцев"
                                    checked={props.installationDate}/>
                    <InputRadioText changeInput={props.setInstallationDate} text="В течение года"
                                    name="installationDate5" value="installationDate5" id="В течение года"
                                    checked={props.installationDate}/>
                </div>
            </div>
            <NavLink to="/page07" className="buttonGo"> Перейти к шагу 7</NavLink>
            <NavLink to="/page05" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page06;