<template>
    <div class=" overflow-hidden">
        <div class="custom-shape-divider-top-1673808758">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
            </svg>
        </div>
        <section id="ClasesPrivadas" class="relative h-screen w-full flex flex-col sm:space-y-8 justify-center z-0">
            <h1 class="text-fade1 sm:text-5xl text-2xl text-center font-bold md:py-2  aos-item" data-aos="fade-left">Clases Privadas</h1> 
            <h2 class="text-fade1 sm:text-3xl text-md text-center md:py-2 aos-item" data-aos="fade-right">Compra un paquete hoy y recibirás tu primera clase de 30 minutos <strong>totalmente gratis!</strong> </h2>
            <div  class="w-full h-100 text-texttone flex flex-row flex-wrap justify-around items-center">         
                <div  v-for="item in pricingStruct" class-=" ">         
                    <Package :currency="store.state.region_prices.prices.symbol" :price="item.price" :title="item.title" :includes="item.includes" />
                </div>
            </div>
            <h2 class="text-fade1 sm:text-xl text-md text-center font-bold py-2 aos-item" data-aos="fade-left">Clases individuales cuestan $18 por hora.</h2>
           
            
            
        </section>
        
    </div>
</template>

<script setup>
import Package from '../UIElements/Package.vue';

import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

let pricingStruct = [
    {price: store.state.region_prices.prices.two_hr_private, title: "Casual", includes: "2 horas de lecciones privadas cada mes"},
    {price: store.state.region_prices.prices.four_hr_private, title: "Normal", includes: "4 horas de lecciones privadas cada mes"},
    {price: store.state.region_prices.prices.six_hr_private, title: "Dedicado", includes: "6 horas de lecciones privadas cada mes"},
    {price: store.state.region_prices.prices.eight_hr_private, title: "Intenso", includes: "8 horas de lecciones privadas cada mes"},
];


</script>

<style lang="scss" scoped>


.custom-shape-divider-top-1673808758{
    width: 100%;

    overflow: hidden;
}

.custom-shape-divider-top-1673808758 svg {
    // position: relative;
    // display: block;
    width: 145%;
    height: 129px;
}

.custom-shape-divider-top-1673808758 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px)  {
    .custom-shape-divider-top-1673808758 svg {
        width: 145%;
        height: 242px;
    }
}
</style>