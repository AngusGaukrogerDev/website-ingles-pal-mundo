<template>
    <div>
        <div class="custom-shape-divider-bottom-1673808758">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
            </svg>
        </div>
        <section id="Cursos" class="relative bg-fade1 px-5 md:px-20 h-screen w-100 sm:space-y-8 flex flex-col justify-center z-0">
            <h1 class="sm:text-5xl text-2xl text-texttone text-center font-bold aos-item" data-aos="fade-right">Cursos de Grupos</h1> 
            <h2 class="sm:text-xl text-md text-texttone text-center aos-item" data-aos="fade-up">Creemos que el inglés debería ser para todos. Por eso todos nuestros clases de grupo cuestan no más que 4$ por hora! </h2>
            <!-- <h2 class="sm:text-2xl text-xl text-texttone text-center aos-item" data-aos="fade-up"> </h2> -->
            
            <div class="  grid grid-rows-3 grid-cols-2 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-6 content-around justify-between   text-texttone">
                <div v-for="item in CourseDetails">
                    <CourseData :name="item.name" :price-tot="item.priceTot" :price-weekly="item.priceWeekly" :duration="item.duration" :details="item.details"/>
                </div>
            </div>

        </section>
        
    </div>
</template>

<script setup>
    import CourseData from '../UIElements/CourseData.vue';

    let CourseDetails = [
        {name: "Nivel 1: Principiante", priceTot: 36, priceWeekly:4,  duration: 9, details: "El curso perfecto para cualquier estudiante nuevo."},
        {name: "Nivel 2: Pre-Elementario", priceTot: 40, priceWeekly:4,  duration: 10, details: "El curso perfecto para cualquier estudiante nuevo."},
        {name: "Nivel 3: Elementario", priceTot: 44, priceWeekly:4,  duration: 11, details: "El curso perfecto para cualquier estudiante nuevo."},
        {name: "Nivel 4: Pre-Intermedio", priceTot: 56, priceWeekly:4,  duration: 14, details: "El curso perfecto para cualquier estudiante nuevo."},
        {name: "Nivel 5: Intermedio ", priceTot: 52, priceWeekly:4,  duration: 13, details: "El curso perfecto para cualquier estudiante nuevo."},
        {name: "Nivel 6: Pre-Avanzado ", priceTot: 40, priceWeekly:4,  duration: 10, details: "El curso perfecto para cualquier estudiante nuevo."},
        // {name: "Nivel 6: Avanzado ", priceTot: 24, priceWeekly:4,  duration: 6, details: "El curso perfecto para cualquier estudiante nuevo."},
        // {name: "Nivel 7: Competente ", priceTot: 24, priceWeekly:4,  duration: 6, details: "El curso perfecto para cualquier estudiante nuevo."},
    ];

</script>

<style lang="scss" scoped>
.custom-shape-divider-bottom-1673808758{
    width: 100%;
    overflow: hidden;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1673808758 svg {
    // position: relative;
    // display: block;
    width: 145%;
    height: 129px;
}

.custom-shape-divider-bottom-1673808758 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px)  {
    .custom-shape-divider-bottom-1673808758 svg {
        width: 145%;
        height: 242px;
    }
}
</style>