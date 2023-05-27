<template>
    <div>
        <v-container >
            <h1 class="text-center mb-4 ">College Campus Area</h1>
            <v-row>
                <v-col cols="12" md="6" class="text-center grey lighten-5">
                    <h1>About Campus</h1>
                    <div class="mt-4">
                        <p>private ground for outdoor games</p>
                    <p>Seperate parking slot</p>                   
                    <p>Hygenic environment</p>
                    <p>Safe and Secure </p>
                    <p>Clean Garden </p>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img
                        src="./campus.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <v-img
                        src="./images.jpeg"
                    ></v-img>
                </v-col>

                <v-col cols="12" md="6" class="text-center grey lighten-5">
                    <h1>Hangout Space</h1>
                    <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe delectus molestias nemo molestiae velit nobis sint explicabo commodi tenetur eaque quae praesentium, nostrum quam nulla itaque laboriosam eius obcaecati?</p>

                    <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe delectus molestias nemo molestiae velit nobis sint explicabo commodi tenetur eaque quae praesentium, nostrum quam nulla itaque laboriosam eius obcaecati?</p>

                    <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe delectus molestias nemo molestiae velit nobis sint explicabo commodi tenetur eaque quae praesentium, nostrum quam nulla itaque laboriosam eius obcaecati?</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default{
    name:'HeroComp'
}
</script>