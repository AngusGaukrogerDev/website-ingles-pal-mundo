export default {
    state: () => ({
        prices: {
            region: "",
            symbol: "",

            one_hr_private: "",
            two_hr_private: "",
            four_hr_private: "",
            six_hr_private: "",
            eight_hr_private: "",
            
            one_hr_group: "",

            beginner_group: "",
            pre_elementary_group: "",
            elementary_group: "",
            pre_intermediate_group: "",
            intermediate_group: "",
            pre_advanced_group: "",
    
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