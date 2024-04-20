<template>
    <v-footer class="bg-blue-darken-4">
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text"
                :href="link.link">
                {{ link.title }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Studio-YOLO</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const links = [
    { title: "GitHub - EditPix", link: "https://github.com/studio-YOLO/editpix" },
    { title: "EditPix Documentation", link: "" },
    { title: "GitHub - Studio-YOLO", link: "https://github.com/studio-YOLO" },
]
</script>