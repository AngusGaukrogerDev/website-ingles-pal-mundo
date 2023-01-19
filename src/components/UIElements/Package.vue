<template>
    <div class="p-1 space-y-1 xl:space-y-6 border-4 bg-gradient-to-r from-main to-highlight hover:scale-105 hover:cursor-pointer">
        <div class="  bg-fade1 p-3 space-y-1 xl:space-y-6  hover:cursor-pointer">
            <div class=" md:space-x-3 flex flex-row items-end justify-center">
                <span class="text-lg xl:text-6xl">${{ price }}</span>
                 <span class="text-sm xl:text-3xl"> x mes</span>
            </div>
            <div class="text-md xl:text-xl flex justify-center">
                {{ title }}
            </div>
            <div class=" text-base xl:text-lg text-center flex justify-center">
                {{ includes }}
            </div>
        </div>
    </div>
   
</template>

<script setup>

let props = defineProps({
    price: Number,
    title: String,
    includes: String,
});
</script>

<style lang="scss" scoped>

</style>