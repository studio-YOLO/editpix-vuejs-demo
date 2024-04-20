<template>
    <v-app-bar class="bg-blue-darken-4" elevation="0">
        <v-app-bar-title>EditPix - Vue.js Demo</v-app-bar-title>
        <template v-slot:append>
            <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text"
                :to="link.link">
                {{ link.title }}
            </v-btn>
        </template>
    </v-app-bar>
</template>

<script setup>
const links = [
    { title: "Gray Scale", link: "gray_scale" },
    { title: "Change Temperature", link: "change_temperature" }
]
</script>
