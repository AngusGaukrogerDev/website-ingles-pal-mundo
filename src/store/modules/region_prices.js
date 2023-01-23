export default {
    state: () => ({
        prices: {
            region: "",
            symbol: "",

            one_hr_private: 0,
            two_hr_private: 0,
            four_hr_private: 0,
            six_hr_private: 0,
            eight_hr_private: 0,
            
            beginner_group: 0,
            pre_elementary_group: 0,
            elementary_group: 0,
            pre_intermediate_group: 0,
            intermediate_group: 0,
            pre_advanced_group: 0,
    
        }
    }),

    getters: {},
    mutations: {
        SET_PRICES(state, payload){
            state.prices = payload
        }
    },
    actions: {
        updatePrices({commit}, data) {
            commit('SET_PRICES', data)
        }
    },
}