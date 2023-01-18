<template class=" ">
        
        <Navbar />
        <Hero />
        <Info />
        <Book />
        <Contact />
        <Footer />

    
</template>

<script setup>

    import Navbar from './HomeElements/Navbar.vue';
    import Hero from './HomeElements/Hero.vue';
    import Info from './HomeElements/Info.vue';
    import Book from './HomeElements/Book.vue';
    import Contact from './HomeElements/Contact.vue';
    import Footer from './HomeElements/Footer.vue';



    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const name = computed(() =>  {
        return store.state.user.name;
    })
</script>