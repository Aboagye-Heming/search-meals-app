<template>
  <div>
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-block items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-block items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Meals By letters
        </router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-block items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>
<script setup></script>
