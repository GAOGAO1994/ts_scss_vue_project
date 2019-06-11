

export default {
    namespaced: true,

    state: {
        loggedIn: false,
        token: '',
        userInfo: localStorage.getItem('userInfo' ) || {
            username: '',
            gender: '',
        },
    },

    getters: {
        getUserInfo(state: any) {
            return state.userInfo;
        },

        getUserWithAccessToken(state: any) {
            return {
                username: state.userInfo.username,
                token: state.token,
            };
        },
    },

    mutations: {
        setUserInfo(state: any, payLoad: any): void {
            state.userInfo = payLoad;
        },

        setLoginStatus(state: any, payLoad: any): void {
            state.loggedIn = payLoad.loggedIn;
        },

        setAccessToken(state: any, payLoad: any): void {
            state.token = payLoad;
        }
    },

    actions: {
        login({dispatch, commit, getters, rootGetters}) {

        },

        logout(context: any) {

        },
    },

};
