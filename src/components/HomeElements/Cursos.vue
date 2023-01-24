<template>
    <div>
        <div class="custom-shape-divider-bottom-1673808758">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
            </svg>
        </div>
        <section id="Programas" class="relative bg-fade1 px-5 md:px-20 h-screen w-full sm:space-y-8 flex flex-col justify-center z-0">
            <h1 class="sm:text-5xl text-2xl text-texttone text-center font-bold aos-item" data-aos="fade-right">Programas de Grupos</h1> 
            <h2 class="sm:text-xl text-md text-texttone text-center aos-item" data-aos="fade-up">Creemos que el inglés debería ser para todos. Por eso todos nuestros programas de grupo cuestan no más que {{ store.state.region_prices.prices.one_hr_group }} por hora! </h2>
            <!-- <h2 class="sm:text-2xl text-xl text-texttone text-center aos-item" data-aos="fade-up"> </h2> -->
            
            <div class="  grid grid-rows-3 grid-cols-2 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-6 content-around justify-between   text-texttone">
  
                <CourseData :duration="duration[0]" :name="levels[0]" :details="details[0]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />
                <CourseData :duration="duration[1]" :name="levels[1]" :details="details[1]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />
                <CourseData :duration="duration[2]" :name="levels[2]" :details="details[2]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />
                <CourseData :duration="duration[3]" :name="levels[3]" :details="details[3]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />
                <CourseData :duration="duration[4]" :name="levels[4]" :details="details[4]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />
                <CourseData :duration="duration[5]" :name="levels[5]" :details="details[5]" :price-tot="store.state.region_prices.prices.beginner_group" :price-weekly="store.state.region_prices.prices.one_hr_group" />

            </div>

        </section>
        
    </div>
</template>

<script setup>
    import CourseData from '../UIElements/CourseData.vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const levels = ["Nivel 1: Principiante", "Nivel 2: Pre-Elementario","Nivel 3: Elementario","Nivel 4: Pre-Intermedio","Nivel 5: Intermedio ","Nivel 6: Pre-Avanzado "];
    const duration = [9,10,11,14,13,10];
    const details = ["El curso perfecto para cualquier estudiante nuevo.", "El curso perfecto para cualquier estudiante nuevo.", "El curso perfecto para cualquier estudiante nuevo.", "El curso perfecto para cualquier estudiante nuevo.", "El curso perfecto para cualquier estudiante nuevo.", "El curso perfecto para cualquier estudiante nuevo.", ]
    

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