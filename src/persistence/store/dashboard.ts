export default {
    namespaced: true,
    state: {
        isHome: false,
        isEnabled: false, // 是否启用
        isOpen: false,
    },

    getters: {
        isDashBoardActive(state: any): boolean {
            return state.isHome && state.isEnabled && state.isOpen;
        }
    },

    mutations: {
        changeHomeState(state: any, playLoad: boolean): void {
            state.isHome = playLoad;
        },

        changeDashBoardEnabled(state: any, playLoad: boolean): void {
            state.isEnabled = playLoad;
        },

        changeDashBoardOpen(state: any, playLoad: boolean): void {
            state.isOpen = playLoad;
        },
    },

    actions: {
        showDashBoard(context: any, playLoad: boolean): void {
            context.commit('changeHomeState', playLoad);
            context.commit('changeDashBoardEnabled', playLoad);
            context.commit('changeDashBoardOpen', playLoad);
        },

        queryDashBoardState(){

        }
    }
}




