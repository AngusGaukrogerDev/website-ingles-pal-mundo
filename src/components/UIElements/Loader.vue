<template>
    <div class=" bg-texttone text-fade1 flex flex-col justify-center items-center h-screen w-full ">
        <h1 class="font-bold tex-2xl md:text-5xl animate__animated animate__slower animate__heartBeat" data-aos="fade-up">Inglés Pal Mundo</h1>
    </div>
</template>

<script setup>

    import {ref, onMounted} from 'vue';

    const emit = defineEmits("complete");
    let loaded = ref(false);

    onMounted(() => {
        document.onreadystatechange = () => {
            if(document.readyState == "complete")
            {        
                delay();  
            }     
    }});

    async function delay() {
        await sleep(1000);
        emit("complete");
    }

    function sleep(time) {
    return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
    });
    }

</script>

<style lang="scss" scoped>

</style>