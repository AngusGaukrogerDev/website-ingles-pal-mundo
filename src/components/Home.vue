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



    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const name = computed(() =>  {
        return store.state.user.name;
    })
</script>