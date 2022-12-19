<template>
  <div v-if="modalWindowState === false" id="not-modal" class="w-[680px] ml-[137px] h-full">
    <InputPanel @status="initStatus" />
    <div
      v-if="status === ''"
      class="main-breeds pl-[20px] pt-[20px] mt-[10px] w-[680px] bg-white rounded-[20px] h-full pb-[20px]"
    >
      <div class="flex">
        <div class="flex w-full h-[40px]">
          <button class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="$emit('toMain')">
            <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
          </button>
          <div
            class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px] mr-[300px]"
          >
            GALLERY
          </div>
          <button
            class="w-[143px] h-[40px] rounded-[10px] bg-[#FBE0DC] text-['Jost'] font-medium
            text-[#FF868E] text-[12px] leading-[16px] pl-[35px]"
            @click="$emit('changeModalState')"
          >
            UPLOAD
          </button>
          <img class="w-4 h-4 relative top-[10px] left-[-108px]" src="@/img/Vector (Stroke) (2).png" alt="upload_icon">
        </div>
      </div>
      <div class="w-[640px] h-[156px] bg-[#F8F8F7] rounded-[20px] mt-[20px]">
        <div class="pt-[10px] flex">
          <div>
            <p class="font-['Jost'] text-[10px] leading-[10px] text-[#8C8C8C] ml-[30px]">ORDER</p>
            <div class="ml-[20px] mt-[4px]">
              <select
                id="select-order"
                class="w-[290px] h-[40px] rounded-[10px] bg-[white] text-[#1D1D1D]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
                name="Random"
              >
                <option value="Random" selected>Random</option>
                <option class="" value="Desc">Desc</option>
                <option class="" value="Desc">Asc</option>
              </select>
              <img
                class="relative w-[12px] h-[7px] top-[-23px] left-[264px] pointer-events-none"
                src="@/img/Vector (2).png"
                alt="arrow_down"
              >
            </div>
          </div>
          <div>
            <p class="font-['Jost'] text-[10px] leading-[10px] text-[#8C8C8C] ml-[30px]">TYPE</p>
            <div class="ml-[20px] mt-[4px]">
              <select
                id="select-order"
                class="w-[290px] h-[40px] rounded-[10px] bg-[white] text-[#1D1D1D]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
                name="Random"
              >
                <option value="All" selected>All</option>
                <option class="" value="Static" selected>Static</option>
                <option class="" value="Animated">Animated</option>
              </select>
              <img
                class="relative w-[12px] h-[7px] top-[-23px] left-[264px] pointer-events-none"
                src="@/img/Vector (2).png"
                alt="arrow_down"
              >
            </div>
          </div>
        </div>
        <div class="pt-[10px] flex">
          <div>
            <p class="font-['Jost'] text-[10px] leading-[10px] text-[#8C8C8C] ml-[30px]">BREED</p>
            <div class="ml-[20px] mt-[4px]">
              <select
                id="select-order"
                class="w-[290px] h-[40px] rounded-[10px] bg-[white] text-[#1D1D1D]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
                name="Random"
              >
                <option value="all" selected>All breeds</option>
                <option
                  v-for="breed in allBreeds"
                  :key="breed.id"
                  class=""
                >
                  {{ breed.name }}
                </option>
              </select>
              <img
                class="relative w-[12px] h-[7px] top-[-23px] left-[264px] pointer-events-none"
                src="@/img/Vector (2).png"
                alt="arrow_down"
              >
            </div>
          </div>
          <div>
            <p class="font-['Jost'] text-[10px] leading-[10px] text-[#8C8C8C] ml-[30px]">LIMIT</p>
            <div class="flex">
              <div class="ml-[20px] mt-[4px]">
                <select
                  id="select-order"
                  class="w-[240px] h-[40px] rounded-[10px] bg-[white] text-[#1D1D1D]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
                  name="Random"
                >
                  <option value="5" selected>5 items per page</option>
                  <option class="" value="10">10 items per page</option>
                  <option class="" value="15">15 items per page</option>
                  <option class="" value="20">20 items per page</option>
                </select>
                <img
                  class="relative w-[12px] h-[7px] top-[-23px] left-[214px] pointer-events-none"
                  src="@/img/Vector (2).png"
                  alt="arrow_down"
                >
              </div>
              <button class="w-[40px] h-[40px] bg-[#FFFFFF] rounded-[10px] mt-[4px] ml-[10px]">
                <img class="w-[18px] h-[20px] m-auto" src="@/img/Vector (Stroke) (3).png" alt="refresh_icon">
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="angry-grid mt-[20px]">
        <div id="item-0">&nbsp;</div>
        <div id="item-1">&nbsp;</div>
        <div id="item-2">&nbsp;</div>
        <div id="item-3">&nbsp;</div>
        <div id="item-4">&nbsp;</div>
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
  <div v-else-if="modalWindowState" class="w-[680px] h-[840px] bg-[#F8F8F7] rounded-[20px] ml-[137px]">
    <div>
      <button class="w-[40px] h-[40px] bg-[#FFFFFF] rounded-[10px] ml-[620px] mt-[20px]" @click="$emit('closeModal')">
        <img class="m-auto w-[17px] h-[17px]" src="@/img/plus.png" alt="plus_icon">
      </button>
    </div>
    <div class="mt-[40px]">
      <h1 class="font-['Jost'] font-medium text-[36px] leading-[52px] text-[#1D1D1D] text-center">
        Upload a .jpg or .png Dog Image
      </h1>
    </div>
    <div>
      <p class="font-['Jost'] font-normal text-[20px] leading-[30px] text-[#8C8C8C] text-center">
        Any uploads must comply with the <span class="text-[#FF868E]">upload guidelines</span>  or face deletion.
      </p>
    </div>
    <div class="w-[640px] h-[320px] mt-[40px] rounded-[20px] border-2 border-[#FBE0DC] border-dashed mx-auto">
      <p class="mt-[145px] text-center font-['Jost'] font-medium text-[20px] leading-[30px] text-[#8C8C8C]">
        <span class="text-[#1D1D1D] font-bold">Drag here</span>
        your file or <span class="text-[#1D1D1D] font-bold">
          Click here </span>to upload
      </p>
    </div>
    <div class="mt-[20px]">
      <p class="font-['Jost'] font-normal text-[20px] leading-[30px] text-[#8C8C8C] text-center">No file selected</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { allBreeds } from '@/breeds'
import InputPanel from '@/views/input-panel/InputPanel.vue'
import { ref } from 'vue'

defineEmits(['toMain', 'checkState', 'changeModalState', 'closeModal'])
defineProps(['randomId', 'allBreeds', 'like', 'likes', 'favourites', 'disLikes', 'recentActivitiesData', 'modalWindowState'])

const status = ref('')

function initStatus (arg: string) {
  status.value = arg
}

</script>

<style>
select {
  -moz-appearance: none;
  -webkit-appearance: none;
}

.angry-grid {
   display: grid;

   grid-template-columns: 1fr 1fr 1fr;

   height: 100%;

}

#item-0 {
  background-position: center;
  background-image: url('https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg');
  background-size: cover;
  border-radius: 20px;
  width: 200px;
  height: 290px;
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 3;
   grid-column-end: 2;

}
#item-1 {
  background-image: url('https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg');
  background-size: cover;
  border-radius: 20px;
  width: 200px;
  height: 140px;
   grid-row-start: 1;
   grid-column-start: 2;

   grid-row-end: 2;
   grid-column-end: 3;

}
#item-2 {
  background-image: url('https://cdn2.thedogapi.com/images/rkiByec47.jpg');
  background-size: cover;
  border-radius: 20px;
  width: 200px;
  height: 140px;
   grid-row-start: 1;
   grid-column-start: 3;

   grid-row-end: 2;
   grid-column-end: 4;

}
#item-3 {
  background-image: url('https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 9px;
  width: 414px;
  height: 300px;
   grid-row-start: 2;
   grid-column-start: 2;

   grid-row-end: 4;
   grid-column-end: 4;

}
#item-4 {
  background-image: url('https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 6px;
  width: 200px;
  height: 149px;
   grid-row-start: 3;
   grid-column-start: 1;

   grid-row-end: 4;
   grid-column-end: 2;

}
#item-5 {
  background-image: url('https://cdn2.thedogapi.com/images/BFRYBufpm.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 15px;
  width: 200px;
  height: 140px;
   grid-row-start: 4;
   grid-column-start: 1;

   grid-row-end: 5;
   grid-column-end: 2;

}
</style>
