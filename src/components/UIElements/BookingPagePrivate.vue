<template>
    <div class="left-0 top-0 absolute h-full w-full z-[1000] flex flex-col justify-center items-center  backdrop-blur-2xl">
        <div class="bg-texttone  text-5xl  rounded-md border-4 border-fade1 text-fade1 h-3/4 w-3/4  z-[1000]  p-4 overflow-x-hidden overflow-y-auto md:inset-0 ">
            <div class="absolute h-auto w-auto top-1/4 right-1/4">
                <button @click="emit('closeView')" class="hover:scale-110">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>            
                </button>
            </div>
            <div class="h-full w-full flex justify-center items-center">
                Pronto!
            
            </div>
        </div>
    </div>
    
</template>

<script setup>

    const emit = defineEmits(['closeView'])
</script>

<style lang="scss" scoped>

</style>