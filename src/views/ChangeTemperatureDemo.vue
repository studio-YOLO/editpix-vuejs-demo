<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card width="800px">
                    <v-card-title>
                        On-load conversion
                    </v-card-title>
                    <v-card-subtitle>
                        Change color temperature by a factor = -50 when image is loaded
                    </v-card-subtitle>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <img src="@/assets/images/img1.jpeg" @load="imageLoaded()" ref="img1"
                                    alt="originalImage" />
                            </v-col>
                            <v-col>
                                <img v-if="changedImg1Src" :src="changedImg1Src" alt="Gray Scale Image">
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card width="800px">
                    <v-card-title>
                        Slider conversion real time
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <img src="@/assets/images/img2.jpeg" @load="isImg2Loaded = true" ref="img2"
                                    alt="originalImage" />
                            </v-col>
                            <v-col>
                                <img  v-if="changedImg2Src" :src="changedImg2Src" alt="Image">
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>

                        <v-slider v-model="slider" max="100" min="-100" step="1" thumb-label></v-slider>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
import EditPix from 'editpix';
import { ref, watch } from 'vue';

const editpix = new EditPix()

const img1 = ref(null)
const img2 = ref(null)
var isImg2Loaded = false;

let slider = ref(0);

const changedImg1Src = ref(null)
const changedImg2Src = ref(null)

const imageLoaded = () => {
    editpix.changeTemperature(img1.value, -50)
        .then(resultImage => {
            changedImg1Src.value = resultImage.src;
        })
        .catch(error => console.log(error))
}

watch(slider, (newSlider => {
    if (isImg2Loaded) {
        editpix.changeTemperature(img2.value, newSlider)
            .then(resultImage => {
                changedImg2Src.value = resultImage.src;
            })
            .catch(error => console.log(error))
    }

}))

</script>

<style scoped>
img {
    max-width: 300px;
}
</style>