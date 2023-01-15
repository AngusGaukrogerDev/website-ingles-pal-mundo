<template>
    
    <header class="bg-fade1 w-full fixed top-0 z-50">
    
        <nav class="container px-5 py-6 mx-auto xl:flex xl:justify-between xl:items-center">
            <div class="flex items-center justify-between">
                <!-- Link Logo to Main Page -->
                <router-link to="/" class="underline text-xl font-bold text-texttone hover:scale-105 xl:text-2xl hover:text-texttonehover">
                    InglésPalMundo
                </router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex xl:hidden">
                    <button type="button" class="text-texttone hover:text-texttonehover focus:outline-none focus:text-texttonehover">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-texttone">
                            <path fill-rule="evenodd" 
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:mt-0">
          <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-texttonehover hover:cursor-pointer">
            Inicio
          </li>
          <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
            Sobre Nosotros
          </li>
          <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
            Calificaciones
          </li>
          <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
            Escribenos
          </li>
          <button class="bg-highlight hover:scale-105 text-texttone rounded-md border-texttone p-3 border-5 ">
            <strong>¡Reserva tu Leccion Ahora!</strong> 
        </button>
        </ul>
        
        </nav>
    
    
</header>
</template>

<script setup>

import {ref} from 'vue';

let showMenu = ref(false);

</script>

<style lang="scss" scoped>
.custom-shape-divider-top-1673798750 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1673798750 svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 190px;
}

.custom-shape-divider-top-1673798750 .shape-fill {
    fill: #222626;
}

/** For tablet devices **/
@media (min-width: 768px) {
    .custom-shape-divider-top-1673798750 svg {
        width: calc(138% + 1.3px);
    }
    }
</style>