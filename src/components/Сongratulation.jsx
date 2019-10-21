import React from 'react';
import "../css/Сongratulation.css"


const Сongratulation = (props) => {

    return (
        <div className="СongratulationFormSell" onClick={() => {
            props.setReady(false)
        }}>
            <div className='Сongratulation mx-auto'>
                <h2>Заказ успешно отправлен</h2>
            </div>
        </div>
    );
};

export default Сongratulation;