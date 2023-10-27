<template>
  <div class="flex flex-col p-8">
   
    <div class="flex justify-center gap-2 mt-3">
      <router-Link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-Link>
    </div>
    <!-- <pre>{{ingredients}}</pre> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
