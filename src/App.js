import React from 'react';
import './css/App.css';
import './css/Buttons.css';
import './css/inputRadio.css';
import {Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect as connectRR} from "react-redux";
import connect from '@vkontakte/vk-connect';
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";
import Page04 from "./components/Page04";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";
import Page08 from "./components/Page08";
import Page09 from "./components/Page09";
import {
    isKnowSizeAC, setBudgetAC,
    setFacadeAC, setFormsThunkCreator, setHardwareClassAC, setInstallationDateAC,
    setLayoutAC, setPaymentMethodAC, setPresentAC, setReadyAC,
    setSizeAAC,
    setSizeBAC,
    setSizeCAC,
    setUserInfoAC, setWorktopTypeAC, setСonsentAC
} from "./store/OrderReducer";
import Сongratulation from "./components/Сongratulation";

//ИД пользователя, которому отправлять заказ
const user_id = "406782546";

//ИД привязаной кгрупы с добавленным минусом
const group_id = "-35719847";


//токен из настройки группы
const token = "e370b7dd113d8f729ac7c562da1e12053239d0ab0182197130b6bb0735c171dcdde27061aa58daafa0605";

class App extends React.Component {

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.props.setUserInfo(e.detail.data)
                    break;
                case 'VKWebAppCallAPIMethodResult':
                    this.props.setReady(true);
                    this.props.setСonsentEnd(false);
                    break;
                default:
                    console.log(e);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    };

    setForms = (orderInfo, userInfo) => {
        let sendInfo = `ИД пользователя: ${userInfo.id}, имя: ${userInfo.first_name}. Тип кухни: ${orderInfo.layout}. Размер:  ${orderInfo.kitchenSizes.isKnowSize ? "не знает. " : `${orderInfo.kitchenSizes.a}x${orderInfo.kitchenSizes.b}x${orderInfo.kitchenSizes.c}. `}
        Фасад: ${orderInfo.facade}. Тип столешницы: ${orderInfo.worktopType}. Класс фурнитуры: ${orderInfo.hardwareClass}. Ставим: ${orderInfo.installationDate}.
        Бюджет: ${orderInfo.budget}. Способ оплаты: ${orderInfo.paymentMethod}. Подарок: ${orderInfo.present}. `
        let guid = Math.floor(1000000000 + Math.random() * (9000000000 + 1 - 1000000000));
        connect.send("VKWebAppCallAPIMethod", {
            "method": "messages.send",
            "request_id": "sendOrder",
            "params": {
                "user_id": user_id,
                "v": "5.102",
                "random_id": guid,
                "peer_id": group_id,
                "message": sendInfo,
                "access_token": token
            }
        });
    };

    render() {
        return (
            <div className='container'>
                {this.props.state.orderIsReady && <Сongratulation setReady={this.props.setReady}/>}

                <Switch>
                    <Route exact path='/'> <Page01 changeInput={this.props.setLayout}
                                                   layout={this.props.state.orderInfo.layout}/> </Route>
                    <Route path='/page02'> <Page02 setSize={this.props.setSize} isKnowSizeAC={this.props.isKnowSizeAC}
                                                   kitchenSizes={this.props.state.orderInfo.kitchenSizes}
                                                   layout={this.props.state.orderInfo.layout}/> </Route>
                    <Route path='/page03'> <Page03 setFacade={this.props.setFacade}
                                                   facade={this.props.state.orderInfo.facade}/> </Route>
                    <Route path='/page04'> <Page04 setWorktopType={this.props.setWorktopType}
                                                   worktopType={this.props.state.orderInfo.worktopType}/> </Route>
                    <Route path='/page05'> <Page05 setHardwareClass={this.props.setHardwareClass}
                                                   hardwareClass={this.props.state.orderInfo.hardwareClass}/> </Route>
                    <Route path='/page06'> <Page06 setInstallationDate={this.props.setInstallationDate}
                                                   installationDate={this.props.state.orderInfo.installationDate}/>
                    </Route>
                    <Route path='/page07'> <Page07 setBudget={this.props.setBudget}
                                                   budget={this.props.state.orderInfo.budget}/> </Route>
                    <Route path='/page08'> <Page08 setPaymentMethod={this.props.setPaymentMethod}
                                                   paymentMethod={this.props.state.orderInfo.paymentMethod}/> </Route>
                    <Route path='/page09'> <Page09 setForms={this.setForms} setСonsent={this.props.setСonsent}
                                                   setPresent={this.props.setPresent} state={this.props.state}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.order
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (userInfo) => {
            dispatch(setUserInfoAC({first_name: userInfo.first_name, last_name: userInfo.last_name, id: userInfo.id}));
        },
        setLayout: (layout) => {
            dispatch(setLayoutAC(layout));
        },
        setСonsent: (e) => {
            dispatch(setСonsentAC(e.currentTarget.checked));
        },
        setFacade: (facade) => {
            dispatch(setFacadeAC(facade));
        },
        setWorktopType: (worktopType) => {
            dispatch(setWorktopTypeAC(worktopType));
        },
        setHardwareClass: (hardwareClass) => {
            dispatch(setHardwareClassAC(hardwareClass));
        },
        setInstallationDate: (installationDate) => {
            dispatch(setInstallationDateAC(installationDate));
        },
        setBudget: (budget) => {
            dispatch(setBudgetAC(budget));
        },
        setPaymentMethod: (paymentMethod) => {
            dispatch(setPaymentMethodAC(paymentMethod));
        },
        setPresent: (present) => {
            dispatch(setPresentAC(present));
        },
        isKnowSizeAC: (e) => {
            dispatch(isKnowSizeAC(e.currentTarget.checked));
        },
        setSize: (e) => {
            if (e.currentTarget.name === "a") dispatch(setSizeAAC(e.currentTarget.value));
            if (e.currentTarget.name === "b") dispatch(setSizeBAC(e.currentTarget.value));
            if (e.currentTarget.name === "c") dispatch(setSizeCAC(e.currentTarget.value));
            dispatch(isKnowSizeAC(false))
        },
        setReady: (orderIsReady) => {
            dispatch(setReadyAC(orderIsReady))
        },
        setСonsentEnd: (consent) => {
            dispatch(setСonsentAC(consent));
        },

    };
};


//
let AppContainer = compose(
    withRouter,
    connectRR(mapStateToProps, mapDispatchToProps))(App);

export default AppContainer;
