<template>
  <div class="w-[680px] ml-[137px]">
    <InputPanel @status="initStatus" />
    <div
      v-if="status === ''"
      class="main-breeds pl-[20px] pt-[20px] mt-[10px] w-[680px] bg-white rounded-[20px] h-[825px]"
    >
      <div class="flex">
        <div class="flex h-[40px]">
          <button
            v-if="breedOrSingleMode === 'breed'"
            class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="$emit('toMain')"
          >
            <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
          </button>
          <button
            v-if="breedOrSingleMode === 'single'"
            class="w-[40px] h-[40px] rounded-[10px] bg-[#FBE0DC]" @click="backToBreeds"
          >
            <img class="m-auto w-[12px] h-[20px]" src="@/img/Vector (1).png" alt="left_arrow">
          </button>
          <div
            class="w-[146px] h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px]"
          >
            BREEDS
          </div>
          <div
            v-if="breedOrSingleMode === 'single'"
            class="h-[40px] bg-[#FF868E] text-['Jost']
        text-white font-medium leading-[30px] text-[20px] rounded-[10px]
        text-center pt-[5px] ml-[10px] w-[100px]"
          >
            {{ selectSinglebreed.id }}
          </div>
        </div>
        <div v-if="breedOrSingleMode === 'breed'" class="ml-[10px]">
          <select
            id="select-breeds"
            v-model="activeBreeds"
            class="w-[226px] h-[40px] rounded-[10px] bg-[#F8F8F7] text-[#8C8C8C]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
            name="All breeds"
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
            class="relative w-[12px] h-[7px] top-[-23px] left-[200px] pointer-events-none"
            src="@/img/Vector (2).png"
            alt="arrow_down"
          >
        </div>
        <div v-if="breedOrSingleMode === 'breed'" class="ml-[10px]">
          <select
            id="select-breeds"
            v-model="limitSelected"
            class="w-[101px] h-[40px] rounded-[10px] bg-[#F8F8F7] text-[#8C8C8C]
          pr-[10px] pl-[10px] font-['Jost'] font-normal text-[16px] leading-[24px] cursor-pointer"
            name="Limit"
          >
            <option value="200" selected>Limit: All</option>
            <option class="" value="15">Limit: 15</option>
            <option class="" value="20">Limit: 20</option>
            <option class="" value="25">Limit: 25</option>
            <option class="" value="30">Limit: 30</option>
          </select>
          <img
            class="relative w-[12px] h-[7px] top-[-23px] left-[79px] pointer-events-none"
            src="@/img/Vector (2).png"
            alt="arrow_down"
          >
        </div>
        <button v-if="breedOrSingleMode === 'breed'" class="ml-[10px] w-[40px] h-[40px] rounded-[10px] bg-[#F8F8F7]">
          <img class="w-[20px] h-[20px] m-auto" src="@/img/Vector (Stroke) (2).svg" alt="sort_up">
        </button>
        <button v-if="breedOrSingleMode === 'breed'" class="ml-[10px] w-[40px] h-[40px] rounded-[10px] bg-[#F8F8F7]">
          <img class="w-[20px] h-[20px] m-auto" src="@/img/Vector (Stroke) (3).svg" alt="sort_down">
        </button>
      </div>
      <div v-if="breedOrSingleMode === 'breed'">
        <div
          v-if="activeBreeds === 'all'"
          class="flex flex-wrap justify-center overflow-scroll overflow-x-hidden max-h-[734px] w-[666px]"
        >
          <div v-for="breed in allBreeds" :key="breed.id" class="mt-[20px] flex w-[220px] h-[140px] px-1">
            <img
              v-if="breed.id <= limitSelected"
              class="max-h-[140px] bg-contain rounded-[20px] m-auto"
              :src="breed.image.url"
              alt="dogs"
              @mouseover="hover($event)"
              @mouseleave="outHover($event)"
              @click="pickBreed(breed)"
            >
          </div>
        </div>

        <div class="flex flex-wrap justify-center overflow-scroll overflow-x-hidden max-h-[734px] w-[666px]">
          <div v-for="breed in visibleBreeds" :key="breed.id" class="mt-[20px] flex w-[220px] h-[140px] px-1">
            <img
              class="max-h-[140px] bg-contain rounded-[20px] m-auto"
              :src="breed.image.url"
              alt="dogs"
              @mouseover="hover($event)" @mouseleave="outHover($event)"
              @click="pickBreed(breed)"
            >
          </div>
        </div>
      </div>
      <div v-else-if="breedOrSingleMode === 'single'" class="mt-[20px]">
        <img class="rounded-[20px] m-auto h-[400px]" :src="selectSinglebreed.image.url" alt="">
        <div class="mt-[51px] w-[640px] h-[204px] rounded-[20px] border-[2px] border-[#FBE0DC]">
          <h2 class="mt-[26px] font-['Jost'] font-medium text-[20px] leading-[29px] text-[#8C8C8C] text-center">
            {{ selectSinglebreed.bred_for }}
          </h2>
          <div class="flex font-['Jost'] font-medium text-[16px] leading-[23px]">
            <div class="w-[270px] ml-[40px]">
              <h2 class="mt-[20px]">Temparament</h2>
              <p class="text-[#8C8C8C]">{{ selectSinglebreed.temperament }}</p>
            </div>
            <div class="ml-[40px]">
              <div class="flex mt-[20px] ">
                <h2 class="">Height:</h2>
                <p class="text-[#8C8C8C] pl-[5px]">{{ selectSinglebreed.height.imperial }} cm at the withers</p>
              </div>
              <div class="flex">
                <h2>Weight:</h2>
                <p class="text-[#8C8C8C] pl-[5px]">{{ selectSinglebreed.weight.imperial }} kgs</p>
              </div>
              <div class="flex">
                <h2>Life span:</h2>
                <p class="text-[#8C8C8C] pl-[5px]">{{ selectSinglebreed.life_span }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[white] mt-[-231px] w-max mx-auto">
          <h1 class="text-center font-['Jost'] font-medium text-[36px] leading-[52px] text-[#1D1D1D]">
            {{ selectSinglebreed.name }}
          </h1>
        </div>
      </div>
      <!--GRID version (static )-->
      <!-- <div class="angry-grid mt-[20px]">
        <div id="item-0">&nbsp;</div>
        <div id="item-1">&nbsp;</div>
        <div id="item-2">&nbsp;</div>
        <div id="item-3">&nbsp;</div>
        <div id="item-4">&nbsp;</div>
        <div id="item-5">&nbsp;</div>
        <div id="item-6">&nbsp;</div>
        <div id="item-7">&nbsp;</div>
        <div id="item-8">&nbsp;</div>
        <div id="item-9">&nbsp;</div>
      </div> -->
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
import InputPanel from '@/views/input-panel/InputPanel.vue'
import { allBreeds } from '@/breeds'
import { ref } from 'vue'

defineProps(['randomId', 'allBreeds', 'like', 'likes', 'favourites', 'disLikes', 'recentActivitiesData'])

defineEmits(['toMain', 'checkState'])

const status = ref('')
const activeBreeds = ref('all')
const limitSelected = ref(200)
const breedOrSingleMode = ref('breed')
const selectSinglebreed = ref({})

function pickBreed (arg) {
  breedOrSingleMode.value = 'single'
  selectSinglebreed.value = arg
}

function backToBreeds () {
  breedOrSingleMode.value = 'breed'
}

function initStatus (arg: string) {
  status.value = arg
}

function hover (e) {
  e.target.style.opacity = 0.5
}

function outHover (e) {
  e.target.style.opacity = 1
}

const visibleBreeds = computed(() => {
  const vsbl = allBreeds.filter(item => item.name === activeBreeds.value)
  return vsbl
})

</script>

<style scoped>

select {
  -moz-appearance: none;
  -webkit-appearance: none;
}
/* Grid version(static) */
/* .angry-grid {
   display: grid;

   grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
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
#item-6 {
  background-image: url('https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 15px;
  width: 200px;
  height: 140px;
   grid-row-start: 4;
   grid-column-start: 2;

   grid-row-end: 5;
   grid-column-end: 3;

}
#item-7 {
  background-image: url('https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 15px;
  width: 200px;
  height: 300px;
   grid-row-start: 4;
   grid-column-start: 3;

   grid-row-end: 6;
   grid-column-end: 4;

}
#item-8 {
  background-image: url('https://cdn2.thedogapi.com/images/dW5UucTIW.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 12px;
  width: 414px;
  height: 308px;
   grid-row-start: 5;
   grid-column-start: 1;

   grid-row-end: 7;
   grid-column-end: 3;

}
#item-9 {
  background-image: url('https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
  background-size: cover;
  border-radius: 20px;
  margin-top: 15px;
  width: 200px;
  height: 145px;
   grid-row-start: 6;
   grid-column-start: 3;

   grid-row-end: 7;
   grid-column-end: 4;

} */

.main-breeds{
  padding-bottom: 20px;
}
</style>
