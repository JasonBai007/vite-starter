import Vuex from "vuex";

export default new Vuex.Store({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    },
});