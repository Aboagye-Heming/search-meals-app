<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow px-3 py-2 rounded-2xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">
          {{ meal.strMeal }}
        </h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          pariatur atque harum dolor adipisci cum iste vitae deleniti. Dolor,
          veniam alias accusamus omnis mollitia numquam distinctio eos error
          quas fugiat?
        </p>
        <div class="font-semibold pt-7">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors mr-4"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
