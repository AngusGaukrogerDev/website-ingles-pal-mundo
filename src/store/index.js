import {createStore} from 'vuex';
import region_prices from './modules/region_prices';

const store = createStore({
    modules: {
        region_prices
    },
})

export default store;