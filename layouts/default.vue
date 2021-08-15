<template>
    <div>
        <app-header></app-header>
       <Nuxt />
    </div>
</template>
<script>
import appHeader from './app-header.vue'
    import AppHeader from "./app-header.vue"
    export default {
        //middleware:'auth',
        components: { appHeader },
            component:{
                AppHeader
        }
            
    }
</script>