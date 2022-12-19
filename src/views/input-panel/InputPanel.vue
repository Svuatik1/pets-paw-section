<template>
  <div class="search_and_voting_panel flex justify-between" @click="$emit('status', status)">
    <div class="flex">
      <input
        class="main-input w-[470px] h-[60px] rounded-[20px] bg-white pl-[20px]"
        type="text"
        placeholder="Search for breeds by name"
      >
      <button class="relative top-[10px] left-[-55px] w-[40px] h-[40px] bg-[#FBE0DC] rounded-[10px]">
        <img class="w-5 h-5 m-auto" src="@/img/Vector.png" alt="search_logo">
      </button>
    </div>
    <button
      class="hov mr-[10px] ml-[-30px] w-[60px] h-[60px] rounded-[20px] bg-white"
      :class="{'bg-[#FF868E]': status ==='like'}"
      @click="likesBreeds"
    >
      <div v-if="status === 'like'">
        <img
          class="w-[30px] h-[30px] m-auto"
          src="@/img/Vector (Stroke) (5).svg"
          alt="like_icon"
        >
      </div>
      <div v-else>
        <img
          class="w-[30px] h-[30px] m-auto"
          src="@/img/likee.svg"
          alt="like_icon"
        >
      </div>
    </button>
    <button
      class="hov mr-[10px] w-[60px] h-[60px] rounded-[20px] bg-white"
      :class="{'bg-[#FF868E]': status ==='favourite'}"
      @click="favouriteBreeds"
    >
      <div v-if="status === 'favourite'">
        <img
          class="w-[30px] h-[26px] m-auto"
          src="@/img/Vector 348 (Stroke) (1).svg" alt="fovourite_icon"
        >
      </div>
      <div v-else>
        <img
          class="w-[30px] h-[26px] m-auto"
          src="@/img/favouriteeee.svg" alt="fovourite_icon"
        >
      </div>
    </button>
    <button
      class="hov w-[60px] h-[60px] rounded-[20px] bg-white"
      :class="{'bg-[#FF868E]': status ==='disLike'}"
      @click="disLikesBreeds"
    >
      <div v-if="status === 'disLike'">
        <img
          class="w-[30px] h-[30px] m-auto"
          src="@/img/Vector (Stroke) (6).svg"
          alt="dislike_icon"
        >
      </div>
      <div v-else>
        <img
          class="w-[30px] h-[30px] m-auto"
          src="@/img/dislikeeeee.svg"
          alt="dislike_icon"
        >
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const status = ref('none')

defineEmits(['status'])

function likesBreeds () {
  status.value = 'like'
}

function favouriteBreeds () {
  status.value = 'favourite'
}

function disLikesBreeds () {
  status.value = 'disLike'
}

</script>

<style>
  .some{
    fill: purple;
  }
</style>
