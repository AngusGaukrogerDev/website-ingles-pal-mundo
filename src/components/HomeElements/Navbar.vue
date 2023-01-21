<template>
    <header class="bg-fade1 w-full fixed top-0 z-50 overflow-hidden ">       
        <nav class="container px-5 py-6 mx-auto xl:flex xl:justify-between xl:items-center aos-item " data-aos="fade-left">
            <div class="flex items-center justify-between">
                <!-- Link Logo to Main Page -->

                <h1 class="font-bold text-2xl text-texttone text-transparent bg-clip-text bg-gradient-to-r from-main to-highlight">
                  <a href="#" >
                    InglésPalMundo
                  </a>
                </h1>

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
            <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-4 xl:mt-0">
              <li href="#" class="text-sm font-bold text-texttone hover:scale-105 hover:text-texttonehover hover:cursor-pointer">
                <a href="#">Inicio</a> 
              </li>
              <li   class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
                <a href="#SobreNosotros" >Sobre Nosotros</a> 
              </li>
              <li   class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
                <a href="#NuestrosProfesores" >Nuestros Profesores</a> 
              </li>
              <li   class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
                <a href="#Cursos" >Cursos</a> 
              </li>
              <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
                <a href="#LeccionesPrivadas" >Lecciones Privadas</a> 

              </li>
              <li class="text-sm font-bold text-texttone hover:scale-105 hover:text-slate-300 hover:cursor-pointer">
                <a href="#Escribenos" >Escribenos</a> 

              </li>
              <!-- <button class="bg-gradient-to-r from-main to-highlight hover:scale-105 text-texttone rounded-md border-texttone p-3 border-5 ">
                <strong>¡Reserva tu Leccion Ahora!</strong> 
            </button> -->
            </ul>
        
        </nav>
    
    
</header>
</template>

<script setup>

import {ref} from 'vue';

let showMenu = ref(false);

</script>

<style lang="scss" scoped>
</style>