import React from 'react';
import {NavLink} from "react-router-dom";
import img01 from "../media/avs/01.jpg";
import img02 from "../media/avs/02.jpg";
import img03 from "../media/avs/03.jpg";
import img04 from "../media/avs/04.jpg";


const Page02 = (props) => {
    const showImg = (layout) => {
        if (layout === 'Прямая') return img01;
        if (layout === 'Угловая') return img02;
        if (layout === 'П-образная') return img03;
        if (layout === 'Остравная') return img04;
    }
    return (
        <div className='col '>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 2 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '24%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center'>Какой планировки Ваша кухня?</h2></div>
            <div className="inputContainerSize">
                <div className="inputContainerSizeImgAС mb-4 align-items-center align-self-center">
                    {props.layout === "Прямая" || props.layout === "Угловая" || props.layout === "Остравная" ?
                        <div></div> : <div className="w-25"><p className="textPage2">Сторона «A»:</p>  <input name="a"
                                                                                                              onChange={props.setSize}
                                                                                                              className="inputTextPage2"
                                                                                                              type="number"
                                                                                                              min="0"
                                                                                                              step="1"/>
                        </div>}
                    <div
                        className="page2ImgShell"> {props.layout === "Прямая" || props.layout === "Угловая" || props.layout === "Остравная" ?
                        <div><p className="textPage2 ">Сторона «A»:</p> <input name="a" onChange={props.setSize}
                                                                               className="inputTextPage2Top inputTextPage2"
                                                                               type="number" min="0" step="1"/></div> :
                        <div><p className="textPage2">Сторона «B»:</p> <input onChange={props.setSize} name="b"
                                                                              className="inputTextPage2 inputTextPage2Top"
                                                                              type="number" min="0" step="1"/></div>}
                        <img className="page2Img" src={showImg(props.layout)} alt='кухня'/></div>
                    {props.layout === "Угловая" || props.layout === "Остравная" ?
                        <div className="w-25"><p className="textPage2">Сторона «B»:</p> <input onChange={props.setSize}
                                                                                               name="b"
                                                                                               className="inputTextPage2"
                                                                                               type="number" min="0"
                                                                                               step="1"/>
                        </div> : props.layout === "Прямая" ? <div></div> :
                            <div className="w-25"><p className="textPage2">Сторона «C»:</p>  <input
                                onChange={props.setSize} name="c" className="inputTextPage2" type="number" min="0"
                                step="1"/></div>}
                </div>
                <div className='row mx-auto'>
                    <div className='inputRadioSell mr-2'>
                        <input className="inputRadio" type="checkbox" name="size"
                               id='isKnowSize' checked={props.kitchenSizes.isKnowSize} onChange={props.isKnowSizeAC}/>
                        <label htmlFor='isKnowSize' className="insteadRadio"> </label>
                    </div>
                    <label htmlFor='isKnowSize' className='align-self-center'>незнаю размеров</label></div>
            </div>

            <NavLink to="/page03" className="buttonGo"> Перейти к шагу 3</NavLink>
            <NavLink to="/" className="btn btn-link mx-auto"> {"<"} назад </NavLink>


        </div>
    );
};

export default Page02;