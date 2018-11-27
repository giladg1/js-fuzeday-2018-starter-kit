import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inCart: []
    },
    mutations: {
        setCartItems: (state, items) => {
            state.inCart = items;
            return state;
        }
    },
    getters: {
        inCart: (state) => state.inCart,
        inCartAmount: (state) => state.inCart.length
    },
    actions: {
        setCartItems: (context, items) => context.commit('setCartItems', items)
    }
})
