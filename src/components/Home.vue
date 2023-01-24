<template class=" ">
        
        <Navbar />
        <Hero />
        <Info />
        <NuestrosProfesores />
        <Cursos />
        <LeccionesPrivadas />
        <Contact />
        <Footer />
  
    
</template>

<script setup>

    import Navbar from './HomeElements/Navbar.vue';
    import Hero from './HomeElements/Hero.vue';
    import Info from './HomeElements/Info.vue';
    import LeccionesPrivadas from './HomeElements/LeccionesPrivadas.vue';
    import NuestrosProfesores from './HomeElements/NuestrosProfesores.vue';
    import Cursos from './HomeElements/Cursos.vue';
    import Contact from './HomeElements/Contact.vue';
    import Footer from './HomeElements/Footer.vue';



    import {computed, onMounted, onBeforeMount,  ref} from 'vue';
    import {useStore} from 'vuex';
    // import {i18n} from 'vue-i18n'
        
    const store = useStore();

    const priceList = computed(() =>  {
        return store.state.region_prices.prices;
    })
    const link = import.meta.env.VITE_LINK;

    /*Can be pulled from a backend in time*/ 
    const prices = {
        us: {
            region: "us",
            symbol: "$",
            one_hr_private: "$13",
            two_hr_private: "$24",
            four_hr_private: "$48",
            six_hr_private: "$72",
            eight_hr_private: "$108",
            
            one_hr_group: "$4",

            beginner_group: "$36",
            pre_elementary_group: "$40",
            elementary_group: "$44",
            pre_intermediate_group: "$56",
            intermediate_group: "$52",
            pre_advanced_group: "$40",
        },
        en: {
            region: "en",
            symbol: "£",

            one_hr_private: "£15",
            two_hr_private: "£25",
            four_hr_private: "£50",
            six_hr_private: "£75",
            eight_hr_private: "£100",
            
            one_hr_group: "£4",

            beginner_group: "£36",
            pre_elementary_group: "£40",
            elementary_group: "£44",
            pre_intermediate_group: "£56",
            intermediate_group: "£52",
            pre_advanced_group: "£40",
        },
        pe: {
            region: "pe",
            symbol: "S/",
            one_hr_private: "S/50",
            two_hr_private: "S/93",
            four_hr_private: "S/186",
            six_hr_private: "S/279",
            eight_hr_private: "S/419",
            
            one_hr_group: "S/15.50",

            beginner_group: "S/139.5",
            pre_elementary_group: "S/155",
            elementary_group: "S/170.5",
            pre_intermediate_group: "S/217",
            intermediate_group: "S/201.5",
            pre_advanced_group: "S/170.5",
        },
        co: {
            region: "co",
            symbol: "$",
            one_hr_private: "$59000",
            two_hr_private: "$110000",
            four_hr_private: "$220000",
            six_hr_private: "$330000",
            eight_hr_private: "$440000",
            
            one_hr_group: "$18100",

            beginner_group: "$162900",
            pre_elementary_group: "$181000",
            elementary_group: "$199100",
            pre_intermediate_group: "$253400",
            intermediate_group: "$235300",
            pre_advanced_group: "$181000",
        },
    }
    
    onMounted(() => {
        fetch(link)
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        console.log(payload.location.country.name);
        setRegion(payload.location.country.name)
    });

    } )

function setRegion(region)
{
    switch(region)
    {
        case "Ecuador", "United States", "Argentina", "Venezuela":
            store.dispatch('updatePrices', {
                    region: prices.us.region,
                    symbol: prices.us.symbol,

                    one_hr_private: prices.us.one_hr_private,
                    two_hr_private: prices.us.two_hr_private,
                    four_hr_private: prices.us.four_hr_private,
                    six_hr_private: prices.us.six_hr_private,
                    eight_hr_private: prices.us.eight_hr_private,
                    
                    one_hr_group: prices.us.one_hr_group,

                    beginner_group: prices.us.beginner_group,
                    pre_elementary_group: prices.us.pre_elementary_group,
                    elementary_group: prices.us.elementary_group,
                    pre_intermediate_group: prices.us.pre_intermediate_group,
                    intermediate_group: prices.us.intermediate_group,
                    pre_advanced_group: prices.us.pre_advanced_group,
                });
                break;

        case "Peru":
        store.dispatch('updatePrices', {
                region: prices.pe.region,
                symbol: prices.pe.symbol,

                one_hr_private: prices.pe.one_hr_private,
                two_hr_private: prices.pe.two_hr_private,
                four_hr_private: prices.pe.four_hr_private,
                six_hr_private: prices.pe.six_hr_private,
                eight_hr_private: prices.pe.eight_hr_private,
                
                one_hr_group: prices.pe.one_hr_group,

                beginner_group: prices.pe.beginner_group,
                pre_elementary_group: prices.pe.pre_elementary_group,
                elementary_group: prices.pe.elementary_group,
                pre_intermediate_group: prices.pe.pre_intermediate_group,
                intermediate_group: prices.pe.intermediate_group,
                pre_advanced_group: prices.pe.pre_advanced_group,
            });
            break;

        case "Colombia":
        store.dispatch('updatePrices', {
                region: prices.co.region,
                symbol: prices.co.symbol,

                one_hr_private: prices.co.one_hr_private,
                two_hr_private: prices.co.two_hr_private,
                four_hr_private: prices.co.four_hr_private,
                six_hr_private: prices.co.six_hr_private,
                eight_hr_private: prices.co.eight_hr_private,
                
                one_hr_group: prices.co.one_hr_group,

                beginner_group: prices.co.beginner_group,
                pre_elementary_group: prices.co.pre_elementary_group,
                elementary_group: prices.co.elementary_group,
                pre_intermediate_group: prices.co.pre_intermediate_group,
                intermediate_group: prices.co.intermediate_group,
                pre_advanced_group: prices.co.pre_advanced_group,
            });
            break;
        
        
        case "United Kingdom":

            store.dispatch('updatePrices', {
                region: prices.en.region,
                symbol: prices.en.symbol,

                one_hr_private: prices.en.one_hr_private,
                two_hr_private: prices.en.two_hr_private,
                four_hr_private: prices.en.four_hr_private,
                six_hr_private: prices.en.six_hr_private,
                eight_hr_private: prices.en.eight_hr_private,
                
                one_hr_group: prices.en.one_hr_group,

                beginner_group: prices.en.beginner_group,
                pre_elementary_group: prices.en.pre_elementary_group,
                elementary_group: prices.en.elementary_group,
                pre_intermediate_group: prices.en.pre_intermediate_group,
                intermediate_group: prices.en.intermediate_group,
                pre_advanced_group: prices.en.pre_advanced_group,
            });
            break;
        default:
        store.dispatch('updatePrices', {
                region: prices.us.region,
                symbol: prices.us.symbol,

                one_hr_private: prices.us.one_hr_private,
                two_hr_private: prices.us.two_hr_private,
                four_hr_private: prices.us.four_hr_private,
                six_hr_private: prices.us.six_hr_private,
                eight_hr_private: prices.us.eight_hr_private,
                
                one_hr_group: prices.us.one_hr_group,

                beginner_group: prices.us.beginner_group,
                pre_elementary_group: prices.us.pre_elementary_group,
                elementary_group: prices.us.elementary_group,
                pre_intermediate_group: prices.us.pre_intermediate_group,
                intermediate_group: prices.us.intermediate_group,
                pre_advanced_group: prices.us.pre_advanced_group,
                });
            break;
    }
    console.log(localeId.value);
    console.log(store.state.region_prices.prices);
}
</script>