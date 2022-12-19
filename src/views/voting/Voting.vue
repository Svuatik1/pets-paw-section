<template>
  <div class="w-[680px] ml-[137px]">
    <InputPanel @status="initStatus" />
    <div
      v-if="status === ''"
      class="pl-[20px] mt-[10px] w-[680px] h-[782px] bg-white rounded-[20px] py-[20px] pb-[20px]"
    >
      <div class="flex w-[196px] h-[40px]">
        <button class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="$emit('toMain')">
          <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
        </button>
        <div
          class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px]"
        >
          VOTING
        </div>
      </div>
      <div class="w-[640px] h-[360px] mt-[20px]">
        <img class="rounded-[20px] m-auto h-[400px]" :src="allBreeds[emit.randomId].image.url" alt="main_dog">
        <div class="flex w-[248px] h-[80px] mx-auto mt-[-40px]">
          <button
            class="hov-btn-like w-[80px] h-[80px] bg-[#97EAB9] rounded-l-[20px] border-[4px] border-white"
            @click="$emit('checkState', {id:randomId, mark:'like'})"
          >
            <img src="@/img/Vector (Stroke).svg" alt="like_icon" class="m-auto">
          </button>
          <button
            class="hov-btn-favourite w-[80px] h-[80px] bg-[#FF868E] border-[2px] border-white border-y-[4px]"
            @click="$emit('checkState', {id:randomId, mark:'favourite'})"
          >
            <img src="@/img/Vector 348 (Stroke).svg" alt="favourite_icon" class="m-auto">
          </button>
          <button
            class="hov-btn-dislike w-[80px] h-[80px] bg-[#FFD280] rounded-r-[20px] border-[4px] border-white"
            @click="$emit('checkState', {id:randomId, mark:'dislike'})"
          >
            <img src="@/img/Vector (Stroke) (1).svg" alt="dislike_icon" class="m-auto">
          </button>
        </div>
      </div>
      <div class="mt-[100px] mr-[20px] max-h-[200px] overflow-scroll overflow-x-hidden">
        <div />
        <div
          v-for="oneData in recentActivitiesData" :key="oneData.key"
          class="w-[640px] h-[60px] bg-[#F8F8F7] rounded-[10px] mb-[10px] flex"
        >
          <div class="w-[60px] h-[30px] rounded-[5px] bg-[white] my-auto ml-[15px]">
            <p class="text-center pt-[3px] font-['Jost'] font-normal text-[16px] leading-[24px]">
              {{ `${oneData.date.getHours()}:${oneData.date.getMinutes()}` }}
            </p>
          </div>
          <p class="my-auto w-[350px] font-['Jost'] font-medium text-[16px] leading-[24px] ml-[20px]">
            Image ID: <span class="font-['Jost'] font-extrabold">
              {{ `${allBreeds[oneData.id].image.id}` }}
            </span> was added to {{ oneData.mark }}s
          </p>
          <img
            v-if="oneData.mark === 'favourite'"
            class="w-5 h-5 my-auto ml-[160px]"
            src="@/img/favourite_small.png" alt="small_favourite_icon"
          >
          <img
            v-else-if="oneData.mark ==='like'"
            class="w-5 h-5 my-auto ml-[160px]"
            src="@/img/like_small.png" alt="small_like_icon"
          >
          <img
            v-else-if="oneData.mark ==='dislike'"
            class="w-5 h-5 my-auto ml-[160px]"
            src="@/img/dislike_small.png" alt="small_dislike_icon"
          >
        </div>
      </div>
    </div>

    <div
      v-else-if="status === 'like'"
      class="pl-[20px] pt-[20px] mt-[10px] w-[680px] bg-white rounded-[20px] h-[90%]"
    >
      <div class="flex w-[196px] h-[40px]">
        <button class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="status =''">
          <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
        </button>
        <div
          class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px]"
        >
          LIKES
        </div>
      </div>
      <div class="flex flex-wrap justify-center overflow-scroll overflow-x-hidden max-h-[734px] w-[666px]">
        <div v-for="image in likes" :key="image" class="mt-[20px] flex w-[220px] h-[140px] px-1">
          <img class="max-h-[140px] bg-contain rounded-[20px] m-auto" :src="allBreeds[image.id].image.url" alt="dogs">
        </div>
      </div>
    </div>
    <div
      v-else-if="status === 'favourite'"
      class="pl-[20px] pt-[20px] mt-[10px] w-[680px] bg-white rounded-[20px] h-[90%]"
    >
      <div class="flex w-[196px] h-[40px]">
        <button class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="status =''">
          <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
        </button>
        <div
          class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px]"
        >
          FAVOURITE
        </div>
      </div>
      <div class="flex flex-wrap justify-center overflow-scroll overflow-x-hidden max-h-[734px] w-[666px]">
        <div v-for="image in favourites" :key="image" class="mt-[20px] flex w-[220px] h-[140px] px-1">
          <img class="max-h-[140px] bg-contain rounded-[20px] m-auto" :src="allBreeds[image.id].image.url" alt="dogs">
        </div>
      </div>
    </div>
    <div
      v-else-if="status === 'disLike'"
      class="pl-[20px] pt-[20px] mt-[10px] w-[680px] bg-white rounded-[20px] h-[90%]"
    >
      <div class="flex w-[196px] h-[40px]">
        <button class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="status =''">
          <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
        </button>
        <div
          class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px]"
        >
          DISLIKES
        </div>
      </div>
      <div class="flex flex-wrap justify-center overflow-scroll overflow-x-hidden max-h-[734px] w-[666px]">
        <div v-for="image in disLikes" :key="image" class="mt-[20px] flex w-[220px] h-[140px] px-1">
          <img class="max-h-[140px] bg-contain rounded-[20px] m-auto" :src="allBreeds[image.id].image.url" alt="dogs">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { allBreeds } from '@/breeds'
import InputPanel from '@/views/input-panel/InputPanel.vue'
import { ref } from 'vue'

defineEmits(['toMain', 'checkState'])
const emit = defineProps(['randomId', 'allBreeds', 'like', 'likes', 'favourites', 'disLikes', 'recentActivitiesData'])

const status = ref('')

function initStatus (arg: string) {
  status.value = arg
}

</script>

<style>
  .hov:hover{
    background-color: #FBE0DC;
  }

  .main-input:focus{
    border: 2px solid #FF868E;
  }
</style>
