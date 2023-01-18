<template>
    <div class=" overflow-hidden">
        <div class="custom-shape-divider-top-1673808758">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
            </svg>
        </div>
        <section id="Precios" class="relative h-screen w-100 flex flex-col sm:space-y-9 justify-center z-0">
            <h1 class="text-fade1 sm:text-7xl text-4xl text-center font-bold py-2 ">Precios</h1> 
            <h2 class="text-fade1 sm:text-5xl text-2xl text-center font-bold py-2 ">Recibir tu primera leccion (30 minutos) por gratis!</h2>
            <div  class="w-100 h-100 text-texttone flex flex-row flex-wrap justify-around items-center">         
                <div v-for="item in pricingStruct" class-=" ">         
                    <Package :price="item.price" :title="item.title" :includes="item.includes" />
                </div>
            </div>
           
            
            
        </section>
        
    </div>
</template>

<script setup>
import Package from '../UIElements/Package.vue';

let pricingStruct = [
    {price: 32, title: "Casual", includes: "2 horas de lecciones privadas cada mes"},
    {price: 64, title: "Normal", includes: "4 horas de lecciones privadas cada mes"},
    {price: 96, title: "Dedicado", includes: "6 horas de lecciones privadas cada mes"},
    {price: 128, title: "Intenso", includes: "8 horas de lecciones privadas cada mes"},
];


</script>

<style lang="scss" scoped>


.custom-shape-divider-top-1673808758{
    width: 100vw;
    overflow: hidden;
}

.custom-shape-divider-top-1673808758 svg {
    // position: relative;
    // display: block;
    width: calc(145% + 1.3px);
    height: 129px;
}

.custom-shape-divider-top-1673808758 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px)  {
    .custom-shape-divider-top-1673808758 svg {
        width: calc(145% + 1.3px);
        height: 242px;
    }
}
</style>