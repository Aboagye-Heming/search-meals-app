<template>
    <div>
        <div
      :key="meal.idMeal"
      class="bg-white shadow px-3 py-2 rounded-2xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
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
          <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>
        </div>
      </div>
    </div>
    </div>
</template>
<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";


const {meal } = defineProps({
    meal:{
        required: true,
        type: Object
    }
})

</script>