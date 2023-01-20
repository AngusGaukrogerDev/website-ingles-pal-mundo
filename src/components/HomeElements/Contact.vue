<template>
    <div>
        <div class="custom-shape-divider-bottom-1673989820">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <section id="Escribenos" class="relative bg-fade1 text-texttone flex flex-col xl:flex-row flex-wrap xl:justify-evenly items-center h-screen w-100 ">

                    <div>
                        <h2 class="text-texttone  sm:text-8xl text-2xl text-center font-bold py-2 ">Escribenos</h2> 
                        
                    </div>
                    <form id="contact-form" class="flex flex-col xl:w-1/4 space-y-4 justify-evenly "  @submit.prevent="formSubmit">
                            <div class="flex flex-col justify-start">
                                <label  for="name">Nombre: </label>
                                <input class=" h-8 rounded-sm text-fade1" type="text" name="name" id="name" required="" v-model="form.name" >
                            </div>
                            <div class="flex flex-col justify-start">
                                <label class=" "  for="email">Correo Electronico: </label>
                                <input class="text-fade1 h-8 rounded-sm"  type="email" name="email" id="email" required="" v-model="form.email" >
                            </div>
                            <div class="flex flex-col justify-start">
                                <label class=" " for="email">Mensaje:</label>

                                <textarea class="text-fade1 h-24 rounded-sm" name="textarea" id="textarea" required="" v-model="form.content"></textarea>

                            </div>     
                        
                        <div class="flex justify-center">
                            <!-- <VueRecaptcha
                                :sitekey="siteKey"
                                :load-recaptcha-script="true"
                                @verify="handleSuccess"
                                @error="handleError"
                            ></VueRecaptcha> -->
                            <button v-show="captchaSuccess" class="bg-gradient-to-r w-1/2  font-bold from-main to-highlight hover:scale-105 text-texttone rounded-md border-texttone p-3 border-5" type="submit" value="Send Message">Envía Mensaje</button>     
                            <span  v-show="captchaError" class="text-red-500">Error! Failed!</span>
                            
                        </div>
                        <span class="text-green-500" v-show="showSuccess">Your message has been sent!</span>
                        <span class="text-red-500" v-show="showError">Error! Your message has not been sent!</span>
                    </form>
          
        </section>
    </div>
</template>

<script setup>

    import {ref} from 'vue';
    import axios from 'axios';
    import { VueRecaptcha } from 'vue-recaptcha';
    let form = {
        name: '',
        email: '',
        content: '',
        subject: 'InglésPalMundo - Contact Form',
    }

    let showSuccess = ref(false);
    let showError = ref(false);

    let siteKey = '';
    let captchaSuccess = ref(true);
    let captchaError = ref(false);

    function formSubmit()
    {
        axios.post("https://mail.brth.uk:1234/api/v1/form/inglespalmundo", form)
        .then((res) => {
            showSuccess.value = true
        })
        .catch((error) => {
            showError.value = false
        })
        .finally(() => {
            form.name = ''
            form.email = ''   
            form.content = ''
        });
    }

    function handleSuccess()
    {
        captchaSuccess.value = true;
    }
    function handleError()
    {
        captchaError.value = true;
    }
</script>

<style lang="scss" scoped>
.custom-shape-divider-bottom-1673989820 {

bottom: 0;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;
transform: rotate(180deg);
}

.custom-shape-divider-bottom-1673989820 svg {
position: relative;
display: block;
width: 181% ;
height: 173px;
transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1673989820 .shape-fill {
fill: #222626;
}
</style>