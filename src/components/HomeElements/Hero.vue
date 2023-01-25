<template>
    <div class=" overflow-hidden">
    <div class="custom-shape-divider-top-1673798750 " >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-aos="fade-right">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <section id="#Inicio" class=" h-screen w-full bg-texttonehover flex  flex-col justify-center  mx-auto z-0 relative top-0 left-0">
        <div class="py-8 px-4  mx-auto  mt-20   text-left  lg:px-16">
            <h1 class="aos-item sm:text-7xl text-5xl  py-2 " data-aos="fade-right">Clases de <strong class=" ">Inglés</strong></h1> 
            <h1 class="aos-item sm:text-7xl text-5xl  py-2 " data-aos="fade-right">Para <TransitionRoot
                appear
            :show="isShowing"
            as="template"
            enter="transform transition duration-[500ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-500 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95"><strong class="" > {{ randomWord }}</strong>
            </TransitionRoot></h1>
            <h2 class="sm:text-2xl text-lg  py-2 aos-item " data-aos-anchor-placement="center-bottom"  data-aos="fade-right">¡Aprende Inglés Cuándo Quieras!</h2>
            <div class="flex flex-row justify-start space-x-8">
                <div class="aos-item " data-aos-anchor-placement="center-bottom"  data-aos="fade-right">
                    <button class="shadow-2xl font-bold bg-gradient-to-r from-main to-highlight my-2 hover:scale-105 text-texttone rounded-md border-texttone p-3 border-5"><a href="#Programas">Nuestros Programas</a> </button>                
                </div>

            </div>
        </div>
        
    </section>
    
</div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import { TransitionRoot } from '@headlessui/vue'
    import 'animate.css';
    const isShowing = ref(true)

    const words = ["Ingenieros", "Empresarios", "Estudiantes", "Viajeros",
     "Todos", "Adultos", "Grupos", "Principiantes", "Humanos", "Colombianos",
      "Peruanos", "Tus Amigos", "Raperos", "J Balvin", "Bad Bunny", "Shakira",
        "La Rosalía", "Lionel Messi", "Ryan Castro", "Tu Perrito" ];

    onMounted(() => {
        getRandomWord();
        const interval = setInterval(function() {
            getRandomWord();

        }, 5000);
    });

    async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}


    let randomWord = ref("");

    async function getRandomWord() {
        isShowing.value = false;
        await sleep(500);
        randomWord.value = words[Math.floor(Math.random() * words.length)];
        isShowing.value = true;
        
    }
</script>

<style lang="scss" scoped>

.hero__textstroke{
    text-shadow:
    -1px -1px 0 #000,
     0   -1px 0 #000,
     1px -1px 0 #000,
     1px  0   0 #000,
     1px  1px 0 #000,
     0    1px 0 #000,
    -1px  1px 0 #000,
    -1px  0   0 #000;
}

.custom-shape-divider-top-1673798750 {
     position: absolute;
     top: 0;
    // left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1673798750 svg {
    position: relative;
    display: block;
    width: 138%;
    height: 190px;
}

.custom-shape-divider-top-1673798750 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px) {
    .custom-shape-divider-top-1673798750 svg {
        width: 138%;
        height: 200px;
    }
}
/** For Bigger Screens**/


</style>