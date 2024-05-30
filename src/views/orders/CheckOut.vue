<script setup>
import { useRoute } from "vue-router";
import ServiceCall from "@/services/Services.js";

const { getProdcutDeteails, resProdcutDeteails} = ServiceCall();

const route = useRoute();
getProdcutDeteails(route.params.id)


</script>
<template>
  <div class="grid grid-cols-12 m-2 my-8 space-x-3 sm:mx-5 md:mx-24">
    <div class="col-span-6">

      <div class="w-full ">

        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div class="mb-12 text-center border-b-2 border-slate-600">
            <h1 class="text-3xl">Place Your Order</h1>
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
              Name*
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none border-slate-500 focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="name">
          </div>
          <div class="mb-2">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="mobileNumber">
              Mobile Number *
            </label>
            <input
              class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-slate-500 focus:outline-none focus:shadow-outline"
              id="mobileNumber" type="number" placeholder="Mobile Number">
          </div>
 

          <div class="">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="mobileNumber">
              Address *
            </label>
             <textarea name="" id="" class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-slate-500 focus:outline-none focus:shadow-outline"></textarea>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-[#010412] w-full duration-1000 hover:bg-transparent hover:text-black border border-[#010412] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            PLACE ORDER 
          </button>
          
        </div>
      </form>
      
    </div>
  </div>

  <div class="col-span-6">
<div class="">
  <div class="flex items-center justify-between">
    <div class="flex space-x-4">
    <img class="w-20 h-20 border border-slate-500" :src="resProdcutDeteails[0].thumbnail_image" alt="">
    <div>
      <h1 class="text-lg truncate">{{ resProdcutDeteails[0].name }}</h1>
      <h1 class="text-lg truncate">{{ resProdcutDeteails[0].main_price }}</h1> 
    </div>
  </div>

  <div>
    <button class="px-4 py-1 text-white rounded-sm bg-slate-600">Delate</button>
  </div>
  </div>

  <div class="mt-8">
   <div class="flex justify-between py-4 border-b border-gray-800 px-28">
    <p>Sub Total</p>
    <p>{{ resProdcutDeteails[0].main_price }}</p>
   </div> 
  </div>

</div>
  </div>
</div></template>

<style scoped></style>