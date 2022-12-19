<template>
  <div
    class="wrapper w-[1440px] h-full p-8 flex bg-[#E5E5E5]"
    :class="{'bg-[gray]': modalWindowState}"
  >
    <div class="h-[905px]">
      <div class="head pl-[115px]">
        <img src="@/img/Logo.png" alt="main-logo" class="w-[106px] h-[24px]">
      </div>
      <div class="pl-[115px] pt-[85px]">
        <h1 class="font-['Jost'] font-extrabold text-[44px] leading-[58px]">Hi intern!</h1>
        <p class="font-['Jost'] font-medium text-[20px] leading-[29px] text-[#8C8C8C]">
          Welcome to MSI 2021 Front-end test
        </p>
        <p class="font-['Jost'] font-bold text-[20px] leading-[29px] text-black pt-[60px]">
          Lets start using The Dogs API
        </p>
        <div
          class="flex w-[446px] h-[198px] justify-between mt-5"
          :class="{'opacity-[0.2]': modalWindowState}"
        >
          <img src="@/img/Mask Group1.png" alt="first-img-home">

          <img src="@/img/Mask Group2.png" alt="second-img-home">

          <img src="@/img/Mask Group3.png" alt="third-img-home">
        </div>
        <div class="flex w-[446px] h-[36px] justify-between mt-[10px]" :class="{'opacity-[0.2]': modalWindowState}">
          <button
            :class="{'bg-[#FF868E]': active === 'voting', 'text-[white]': active === 'voting'}"
            class="hov w-[138px] h-[36px] bg-white rounded-[10px] font-['Jost']
          font-medium text-[12px] leading-[16px] text-[#FF868E] tracking-[2px]"
            @click="voting"
          >
            VOTING
          </button>
          <button
            :class="{'bg-[#FF868E]': active === 'breeds', 'text-[white]': active === 'breeds'}"
            class="hov w-[138px] h-[36px] bg-white rounded-[10px] font-['Jost']
          font-medium text-[12px] leading-[16px] text-[#FF868E] tracking-[2px]"
            @click="breeds"
          >
            BREEDS
          </button>
          <button
            :class="{'bg-[#FF868E]': active === 'gallery', 'text-[white]': active === 'gallery'}"
            class="hov w-[138px] h-[36px] bg-white rounded-[10px] font-['Jost']
          font-medium text-[12px] leading-[16px] text-[#FF868E] tracking-[2px]"
            @click="gallery"
          >
            GALLERY
          </button>
        </div>
      </div>
    </div>
    <Main v-if="active === 'main'" />
    <Voting
      v-else-if="active === 'voting'"
      :recentActivitiesData="recentActivitiesData"
      :randomId="randomId"
      :allBreeds="localAllBreeds"
      :likes="recentActivitiesData.filter(({mark}) => mark ==='like' )"
      :disLikes="recentActivitiesData.filter(({mark}) => mark ==='dislike' )"
      :favourites="recentActivitiesData.filter(({mark}) => mark ==='favourite' )"
      @toMain="toMain"
      @checkState="checkState"
    />
    <Breeds
      v-else-if="active === 'breeds'"
      :likes="recentActivitiesData.filter(({mark}) => mark ==='like' )"
      :randomId="randomId"
      :allBreeds="localAllBreeds"
      :disLikes="recentActivitiesData.filter(({mark}) => mark ==='dislike' )"
      :favourites="recentActivitiesData.filter(({mark}) => mark ==='favourite' )"
      @toMain="toMain"
      @checkState="checkState"
    />
    <Gallery
      v-else-if="active === 'gallery'"
      :likes="recentActivitiesData.filter(({mark}) => mark ==='like' )"
      :randomId="randomId"
      :allBreeds="localAllBreeds"
      :disLikes="recentActivitiesData.filter(({mark}) => mark ==='dislike' )"
      :favourites="recentActivitiesData.filter(({mark}) => mark ==='favourite' )"
      :modalWindowState="modalWindowState"
      @toMain="toMain"
      @checkState="checkState"
      @changeModalState="changeModalState"
      @closeModal="closeModal"
    />
    <div />
  </div>
</template>

<script lang="ts" setup>
import Main from '@/views/main/Main.vue'
import Voting from '@/views/voting/Voting.vue'
import Breeds from '@/views/breeds/Breeds.vue'
import Gallery from '@/views/gallery/Gallery.vue'
import { allBreeds } from '@/breeds'
import { ref } from 'vue'

const active = ref('main')
const randomId = ref(0)
const localAllBreeds = ref(allBreeds)
const recentActivitiesData = ref([])
const modalWindowState = ref(false)

function checkState ({ id, mark }) {
  randomImageForVoting()
  const date = new Date()
  const data = { date, id, mark }
  recentActivitiesData.value.push(data)
}

function randomImageForVoting () {
  randomId.value = Math.floor(Math.random() * (172 - 1) + 1)
}

function voting () {
  active.value = 'voting'
  randomImageForVoting()
}

function breeds () {
  active.value = 'breeds'
}

function gallery () {
  active.value = 'gallery'
}

function toMain () {
  active.value = 'main'
}

function changeModalState () {
  modalWindowState.value = true
}

function closeModal () {
  modalWindowState.value = false
}

</script>

<style>
  .hov:hover{
    background-color: #FBE0DC;
  }
</style>
