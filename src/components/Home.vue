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



    import {computed, onMounted, onBeforeMount} from 'vue';
    import {useStore} from 'vuex';

    const link = import.meta.env.VITE_LINK;

    const prices = {
        us: {
            one_hr_private: 18,
            two_hr_private: 32,
            four_hr_private: "",
            six_hr_private: "",
            eight_hr_private: "",
            
            beginner_group: "",
            pre_elementary_group: "",
            elementary_group: "",
            pre_intermediate_group: "",
            intermediate_group: "",
            pre_advanced_group: "",

        }
    }
    onBeforeMount(() => {

        fetch(link)
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {
            console.log(payload.location.country.name);
            setRegion(payload.location.country.name)
        });

    })

    function setRegion(region)
    {
        
    }
    const store = useStore();

    const name = computed(() =>  {
        return store.state.user.name;
    })
</script>