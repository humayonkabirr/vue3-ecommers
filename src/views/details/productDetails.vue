<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import ServiceCall from "@/services/Services.js";

const { getProdcutDeteails, resProdcutDeteails, getProductsPelated, resProductsPelated, getCart } = ServiceCall();
const route = useRoute();

// Reactive form data object
const FormData = reactive({
  selectedSize: null,
  id: route.params.id,
  variant: null,
  user_id: 8,
  quantity: 1
});

// Fetch product details and related products
getProdcutDeteails(route.params.id);
getProductsPelated(route.params.id);

function details() {
  getProdcutDeteails(route.params.id);
  getProductsPelated(route.params.id);
}

// Temporary data to hold selected size and color
const tempData = reactive({
  size: null,
  color: null
});

// Functions to update selected size and color
function selectSize(size) {
  tempData.size = size;
  updateVariant();
}

function selectColor(color) {
  tempData.color = color;
  updateVariant();
}

// Watchers to update FormData.variant whenever size or color changes
function updateVariant() {
  if (tempData.size && tempData.color) {
    FormData.variant = `${tempData.color}-${tempData.size}`;
  } else if (tempData.color) {
    FormData.variant = tempData.color;
  } else if (tempData.size) {
    FormData.variant = tempData.size;
  } else {
    FormData.variant = null;
  }
}

// Alternatively, you can use watch to reactively update variant
watch([() => tempData.size, () => tempData.color], updateVariant);

</script>

<template>
  <div class="grid grid-cols-12 m-2 sm:mx-5 md:mx-24">
    <div class="flex col-span-5 p-2 space-x-2 border border-slate-600">
      <div class="w-1/12 space-y-2">
        <img class="border border-red-500" :src="resProdcutDeteails[0].thumbnail_image" alt="">
      </div>
      <div class="w-11/12 overflow-hidden">
        <img class="duration-700 hover:scale-150" :src="resProdcutDeteails[0].thumbnail_image" alt="">
      </div>
    </div>
    <div class="col-span-4 px-6">
     <form  v-on:submit.prevent="getCart(FormData, 'carts/add')">
      <h1 class="text-xl">{{ resProdcutDeteails[0].name }}</h1>
      <a href="https://wa.me/+8804641546" class="flex items-center hover:text-red-400">
        <svg data-v-11f90b60="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px"
          fill-rule="evenodd" clip-rule="evenodd" class="single_whats_app">
          <path fill="#fff"
            d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z">
          </path>
          <path fill="#fff"
            d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z">
          </path>
          <path fill="#cfd8dc"
            d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z">
          </path>
          <path fill="#40c351"
            d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z">
          </path>
          <path fill="#fff" fill-rule="evenodd"
            d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
            clip-rule="evenodd"></path>
        </svg>
        <small>Ask for details</small>
      </a>

      <div class="mt-4 space-x-2">
        Price: <strong>{{ resProdcutDeteails[0].main_price }}</strong> <small class="text-red-400 line-through">{{
          resProdcutDeteails[0].stroked_price }}</small>
      </div>

      <div class="my-4">
        <span class="px-2 py-1 border-2">
          Shipping Within 2-5 Days with 100% COD
        </span>
      </div>

      <div v-if="resProdcutDeteails[0].choice_options[0]" class="mt-8">
        <h1 class="text-lg">Select Size</h1> 
        <div class="flex flex-wrap -mb-2"> 
          <button  type="button" v-for="item in resProdcutDeteails[0].choice_options[0].options" :key="item" @click="selectSize(item)" :class="{ 'text-white': item == tempData.size ?? 'true', 'bg-[#010412]': item == tempData.size ?? 'true'}" class="py-1 mb-2 mr-1 border w-11 border-[#010412] hover:text-white hover:bg-[#010412]">
            {{ item }}
          </button> 
        </div>
      </div>

      <div v-if="resProdcutDeteails[0].colors[0]" class="mt-8">
        <h1 class="text-lg">Select Color</h1>
        <div class="flex space-x-3">
          <button type="button" v-for="colors in resProdcutDeteails[0].colors" :key="colors" @click="selectColor(colors)" 
            class="p-1 mb-2 border border-transparent rounded-full hover:bg-black hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400"
            :class="{ 'text-white': colors == tempData.color ?? 'true', 'bg-[#010412]': colors == tempData.color ?? 'true'}">
            <div class="w-6 h-6 bg-red-700 rounded-full"></div>
          </button> 
        </div>
      </div>

      <div class="mt-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="mb-4 mr-4 lg:mb-0">
            <div class="w-28">
              <div class="relative flex flex-row w-full h-10 bg-transparent border border-[#010412]">
                <button type="button" @click="FormData.quantity >1 ? FormData.quantity-- : ''"
                  class="w-20 h-full text-gray-600 bg-gray-100 border-r  outline-none cursor-pointer hover:text-gray-200 duration-1000 hover:bg-[#010412]">
                  <span class="m-auto text-2xl font-thin">-</span>
                </button>
                <input type="number"
                  class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 focus:outline-none text-md hover:text-black"
                  min="1" :value="FormData.quantity">
                <button type="button" @click="FormData.quantity++"
                  class="w-20 h-full text-gray-600 bg-gray-100 border-l outline-none cursor-pointer hover:text-gray-200 duration-1000 hover:bg-[#010412]">
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="mb-4 mr-4 lg:mb-0">
              <button  type="button"
                class="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-[#010412] duration-700 hover:bg-[#010412] hover:text-white lg:w-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="mb-4 lg:mb-0">
              <button  type="button"
                class="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-[#010412] duration-700 hover:bg-[#010412] hover:text-white lg:w-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-heart"
                  viewBox="0 0 16 16">
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-4 lg:mb-0">
          <!-- <router-link :to="{ name: 'order', params:{ id: resProdcutDeteails[0].id } }" class="py-2 flex justify-center w-full text-white border border-[#010412] duration-700  bg-[#010412] hover:bg-transparent hover:text-gray-600">
            Order Now
          </router-link>   -->
          <button type="submit"  class="py-2 flex justify-center w-full text-white border border-[#010412] duration-700  bg-[#010412] hover:bg-transparent hover:text-gray-600">Order Now</button>
        </div>
      </div>
     </form> 
     
    </div>
    <div class="col-span-3">
      <div class="px-5 py-3 text-xs leading-8 text-gray-700 border-2 border-red-500 border-dotted">
        <p> <i class="fa fa-check"></i> Order today and receive it within 02 - 03 days </p>
        <p> <i class="fa fa-check"></i> quantity Product </p>
        <p> <i class="fa fa-check"></i> Cash In Delivery Available </p>
      </div>

      <div class="px-5 py-3 mt-5 text-xs leading-8 text-gray-700 border-2 border-red-500 border-dotted">
        <p> <i class="fa fa-check"></i> Have question about this product ? please call </p>
        <p> <i class="fa fa-phone"></i>01700000000</p>
      </div>
    </div>
  </div>

  <div class="m-2 sm:mx-5 md:mx-24 mt-2 py-2 bg-gray-200 border border-[#010412]">
    <strong class="px-4 py-3 bg-[#010412] text-white">Description</strong>
    <strong class="px-4 py-3 hover:bg-[#010412] hover:text-white duration-1000">How to order</strong>
    <strong class="px-4 py-3 hover:bg-[#010412] hover:text-white duration-1000">Return Policy</strong>
  </div>

  <div class="m-2 mt-8 sm:mx-5 md:mx-24" v-html="resProdcutDeteails[0].description">
  </div>

  <div class="mx-2 my-6 sm:mx-5 md:mx-24">
    <h1 class="my-2 text-2xl font-bold ">Related Products</h1>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

      <div v-for="item2 in resProductsPelated" :key="item2">
        <div class="w-full max-w-sm duration-1000 border border-gray-200 rounded-lg shadow bg-orange-50 hover:shadow-lg">

          <router-link :to="{ name: 'details', params: { id: item2.id } }" :onclick="details">
            <div class="m-2 overflow-hidden">
              <img class="duration-500 rounded-t-lg hover:rotate-12 hover:scale-125" :src="item2.thumbnail_image"
                alt="product image" />
            </div>
          </router-link>
          <div class="w-full px-2 pb-2">
            <router-link :to="{ name: 'details', params: { id: item2.id } }" :onclick="details">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900 truncate">
                {{ item2.name }}
              </h5>
            </router-link>

            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-900">{{ item2.main_price }}</span>
              <small class="text-xs text-red-600 line-through">{{ item2.stroked_price }}</small>
            </div>

            <div class="flex w-full items-center justify-between space-x-2px]">
              <a href="#"
                class="text-slate-900 w-5/6 hover:bg-[#010412] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-5 py-1.5 text-center border border-[#010412] ">
                Order Now
              </a>
              <a href="#"
                class="text-slate-900 w-1/6 hover:bg-[#010412] focus:ring-4 border-l-0 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-r-md text-sm py-0.5 text-center border border-[#010412] ">
                <i class="text-lg fa-regular fa-heart hover:font-bold"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>