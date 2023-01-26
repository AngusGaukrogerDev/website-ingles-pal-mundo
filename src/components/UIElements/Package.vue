<template>
    <div class=" z-10 aos-item" data-aos="fade-right">
        <div class="p-1   h-auto sm:h-auto border-4 bg-gradient-to-r rounded-lg from-main to-highlight hover:scale-105 hover:cursor-pointer">
            <div class=" h-32 sm:h-auto bg-fade1 p-1 xl:px-5 xl:py-3 xxl:space-y-6   hover:cursor-pointer">
                <div class=" md:space-x-3 xl:py-4 flex flex-row items-end justify-center">
                    <span class="text-lg xl:text-7xl">{{ price }} </span>
                    <span class="text-lg xl:text-3xl"> x mes</span>
                </div>
                <div class=" xl:py-4 text-md xl:text-3xl font-bold flex justify-center">
                    {{ title }}
                </div>
                <div class=" text-base xl:text-lg text-center xl:py-4 flex justify-center">
                    {{ includes }}
                </div>
                <div class="flex justify-center ">
                    <button @click="openBookingPage()" class="bg-gradient-to-r from-main to-highlight hover:scale-105 text-texttone rounded-md border-texttone  p-2 md:p-3 border-5 ">
                        <strong>
                            Reserva Ahora!
                        </strong>
                    </button>
                </div>    
            </div>
        </div>
   </div>
</template>

<script setup>
import {useStore} from 'vuex';

const store = useStore();

const emit = defineEmits(['toBooking']);

let props = defineProps({
    price: String,
    title: String,
    includes: String,
    currency: String,
});

function openBookingPage() {
        emit('toBooking');
        console.log("hit");
    }
</script>

<style lang="scss" scoped>

</style>