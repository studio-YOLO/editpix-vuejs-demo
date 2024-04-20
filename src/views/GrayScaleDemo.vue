<script setup>
import EditPix from 'editpix';
import { ref } from 'vue';

const editpix = new EditPix();

const img1 = ref(null)
const img2 = ref(null)
var isImg2Loaded = false;


const grayScaleImg1Src = ref(null);
const grayScaleImg2Src = ref(null);

const imageLoaded = () => {
    editpix.toGrayScale(img1.value)
        .then(grayScaleImage => {
            grayScaleImg1Src.value = grayScaleImage.src;
        })
        .catch(error => console.log(error))
}

const convertImage = () => {
    if (isImg2Loaded) {
        editpix.toGrayScale(img2.value)
            .then(grayScaleImage => {
                grayScaleImg2Src.value = grayScaleImage.src;
            })
            .catch(error => console.log(error))
    }

}

</script>

<template>

    <v-container>
        <v-row>
            <v-col>
                <v-card width="800px">
                    <v-card-title>
                        On-load conversion
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <img src="@/assets/images/img1.jpeg" @load="imageLoaded()" ref="img1"
                                    alt="originalImage" />
                            </v-col>
                            <v-col>
                                <img v-if="grayScaleImg1Src" :src="grayScaleImg1Src" alt="Gray Scale Image">
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
                        On-click conversion
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <img src="@/assets/images/img2.jpeg" @load="isImg2Loaded = true" ref="img2"
                                    alt="originalImage" />
                            </v-col>
                            <v-col>
                                <img v-if="grayScaleImg2Src" :src="grayScaleImg2Src" alt="Gray Scale Image">
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green-lighten-2" variant="flat" size="x-large" block @click="convertImage()">Convert</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>

</template>

<style scoped>
img {
    max-width: 300px;
}
</style>