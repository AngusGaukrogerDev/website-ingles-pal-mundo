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
    var localeId = ref("");

    /*Can be pulled from a backend in time*/ 
    const prices = {
        us: {
            region: "us",
            symbol: "$",
            one_hr_private: 18,
            two_hr_private: 32,
            four_hr_private: 64,
            six_hr_private: 96,
            eight_hr_private: 128,
            
            beginner_group: 36,
            pre_elementary_group: 40,
            elementary_group: 44,
            pre_intermediate_group: 56,
            intermediate_group: 52,
            pre_advanced_group: 40,
        },
        en: {
            region: "en",
            symbol: "£",

            one_hr_private: 20,
            two_hr_private: 34,
            four_hr_private: 66,
            six_hr_private: 106,
            eight_hr_private: 444,
            
            beginner_group: 40,
            pre_elementary_group: 44,
            elementary_group: 56,
            pre_intermediate_group: 52,
            intermediate_group: 80,
            pre_advanced_group: 16,
        }
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
        case "Peru":
            localeId.value = "pe";
            break;
        case "Colombia":
            localeId.value = "co";
            break;
        case "United Kingdom":
            localeId.value = "en";
            // console.log(prices.en)
            store.dispatch('updatePrices', {
                region: prices.en.region,
                symbol: prices.en.symbol,

                one_hr_private: prices.en.one_hr_private,
                two_hr_private: prices.en.two_hr_private,
                four_hr_private: prices.en.four_hr_private,
                six_hr_private: prices.en.six_hr_private,
                eight_hr_private: prices.en.eight_hr_private,
                
                beginner_group: prices.en.beginner_group,
                pre_elementary_group: prices.en.pre_elementary_group,
                elementary_group: prices.en.elementary_group,
                pre_intermediate_group: prices.en.pre_intermediate_group,
                intermediate_group: prices.en.intermediate_group,
                pre_advanced_group: prices.en.pre_advanced_group,
            });
            break;
        
    }
    console.log(localeId.value);
    console.log(store.state.region_prices.prices);
}
</script>