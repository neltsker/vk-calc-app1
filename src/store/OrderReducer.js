const SET_LAYOUT = 'SET_LAYOUT';
const SET_FACADE = 'SET_FACADE';
const SET_WORKTOP_TYPE = 'SET_WORKTOP_TYPE';
const SET_HARDWARE_CLASS = 'SET_HARDWARE_CLASS';
const SET_INSTALLATION_DATE = 'SET_INSTALLATION_DATE';
const SET_BUDGET = 'SET_BUDGET';
const SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';
const SET_PRESENT = 'SET_PRESENT';
const SET_CONSET = 'SET_CONSET';
const SET_ORDER_IS_READY = 'SET_ORDER_IS_READY';
const IS_KNOW_SIZE = 'IS_KNOW_SIZE';
const SET_SIZE_A = 'SET_SIZE_A';
const SET_SIZE_B = 'SET_SIZE_B';
const SET_SIZE_C = 'SET_SIZE_C';
const SET_USER_INFO = 'SET_USER_INFO';


let initialState = {
    orderInfo: {
        layout: 'Прямая',
        kitchenSizes: {
            a: 0,
            b: 0,
            c: 0,
            isKnowSize: true,
        },
        facade: "Акрил",
        worktopType: "МДФ и ДСП (26мм)",
        hardwareClass: "Эконом",
        installationDate: "Все готово, хоть завтра!",
        budget: "До 20 000 руб.",
        paymentMethod: "Наличными 100%",
        present: "Сертификат до 5000 р."
    },
    userInfo: {
        first_name: "",
        last_name: "",
        id: ""
    },
    isСonsent: false,
    orderIsReady: false
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONSET:
            return {...state, isСonsent: action.isСonsent};
        case SET_ORDER_IS_READY:
            return {...state, orderIsReady: action.orderIsReady};
        case SET_LAYOUT:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    layout: action.layout
                }
            };
        case SET_FACADE:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    facade: action.facade
                }
            };
        case SET_WORKTOP_TYPE:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    worktopType: action.worktopType
                }
            };
        case SET_HARDWARE_CLASS:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    hardwareClass: action.hardwareClass
                }
            };
        case SET_INSTALLATION_DATE:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    installationDate: action.installationDate
                }
            };
        case SET_BUDGET:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    budget: action.budget
                }
            };
        case SET_PAYMENT_METHOD:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    paymentMethod: action.paymentMethod
                }
            };
        case SET_PRESENT:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo,
                    present: action.present
                }
            };
        case IS_KNOW_SIZE:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes: {
                        ...state.orderInfo.kitchenSizes,
                        isKnowSize: action.knowSize
                    }
                }
            };
        case SET_SIZE_A:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes: {
                        ...state.orderInfo.kitchenSizes,
                        a: action.size
                    }
                }
            };
        case SET_SIZE_B:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes: {
                        ...state.orderInfo.kitchenSizes,
                        b: action.size
                    }
                }
            };
        case SET_SIZE_C:
            return {
                ...state,
                orderInfo: {
                    ...state.orderInfo, kitchenSizes: {
                        ...state.orderInfo.kitchenSizes,
                        c: action.size
                    }
                }
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            };
        default:
            return state;
    }

};

export const setСonsentAC = (isСonsent) => ({type: SET_CONSET, isСonsent: isСonsent});
export const setReadyAC = (orderIsReady) => ({type: SET_ORDER_IS_READY, orderIsReady: orderIsReady});
export const setLayoutAC = (layout) => ({type: SET_LAYOUT, layout: layout});
export const setFacadeAC = (facade) => ({type: SET_FACADE, facade: facade});
export const setWorktopTypeAC = (worktopType) => ({type: SET_WORKTOP_TYPE, worktopType: worktopType});
export const setHardwareClassAC = (hardwareClass) => ({type: SET_HARDWARE_CLASS, hardwareClass: hardwareClass});
export const setInstallationDateAC = (installationDate) => ({
    type: SET_INSTALLATION_DATE,
    installationDate: installationDate
});
export const setBudgetAC = (budget) => ({type: SET_BUDGET, budget: budget});
export const setPaymentMethodAC = (paymentMethod) => ({type: SET_PAYMENT_METHOD, paymentMethod: paymentMethod});
export const setPresentAC = (present) => ({type: SET_PRESENT, present: present});


export const isKnowSizeAC = (knowSize) => ({type: IS_KNOW_SIZE, knowSize: knowSize});
export const setSizeAAC = (size) => ({type: SET_SIZE_A, size: size});
export const setSizeBAC = (size) => ({type: SET_SIZE_B, size: size});
export const setSizeCAC = (size) => ({type: SET_SIZE_C, size: size});
export const setUserInfoAC = (userInfo) => ({type: SET_USER_INFO, userInfo: userInfo});


export default OrderReducer;