<template>
    <header class="bg-indigo-700 w-full sticky top-0 z-50 aos-item" data-aos="fade-left">
        <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <!-- Link Logo to Main Page -->
                <router-link to="/" class="text-xl font-bold text-slate-50 md:text-2xl hover:text-slate-300">
                    Vamos Ingles!
                </router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button" class="text-slate-50 hover:text-slate-300 focus:outline-none focus:text-slate-300">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" 
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li class="text-sm font-bold text-slate-50 hover:text-slate-300 hover:cursor-pointer">
            Home
          </li>
          <li class="text-sm font-bold text-slate-50 hover:text-slate-300 hover:cursor-pointer">
            Information
          </li>
          <li class="text-sm font-bold text-slate-50 hover:text-slate-300 hover:cursor-pointer">
            Qualification
          </li>
          <li class="text-sm font-bold text-slate-50 hover:text-slate-300 hover:cursor-pointer">
            Contact Us
          </li>
          <button class="bg-white p-2 ">
            Book a lesson!
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

</style>