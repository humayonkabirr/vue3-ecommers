<script setup>
import { useRoute } from "vue-router";
import ServiceCall from "@/services/Services.js";
import { reactive } from "vue";

const { getProdcutDeteails, getCartList, resCartData, placeOrder} = ServiceCall();

const route = useRoute();
getProdcutDeteails(route.params.id)

getCartList();

const FormData = reactive({
  payment_type: 'cash_on_delivery', 
});
</script>
<template>
  <div class="grid grid-cols-12 m-2 my-8 space-x-3 sm:mx-5 md:mx-24">
    <div class="col-span-6">

      <div class="w-full ">

        <form  v-on:submit.prevent="placeOrder(FormData, 'order/store')" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
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
          <button type="submit"
            class="bg-[#010412] w-full duration-1000 hover:bg-transparent hover:text-black border border-[#010412] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            PLACE ORDER 
          </button>
          
        </div>
      </form>
      
    </div>
  </div>

  <div class="col-span-6">
<div class=""> 
  <div v-for="item, Index in resCartData.data[0].cart_items" :key="Index" class="flex items-center justify-between mb-2">
    <div class="flex items-center space-x-4">
    <img class="w-20 h-20 border border-slate-500" :src="item.product_thumbnail_image" :alt="item.product_name">
    <div>
      <h1 class="text-lg truncate">{{ item.product_name }}</h1>
      
      <h1 class="text-sm truncate">quantity: {{ item.quantity }}</h1> 
    </div>
  </div>

  <div class="flex items-center space-x-2"> 
    <h1 class="text-lg truncate">{{ item.price }}</h1> 
    <button class="px-4 py-1 text-white rounded-sm bg-slate-600">Delate</button>
  </div>
  </div>

  <div class="mt-8">
   <div class="flex justify-between py-4 border-b border-gray-800 px-28">
    <p>Sub Total</p>
    <p>{{ resCartData.data[0].sub_total }}</p>
   </div> 
  </div>

  <div class="mt-8">
   <div class="flex justify-between py-4 border-b border-gray-800 px-28">
    <p>Total</p>
    <p>{{ resCartData.grand_total }}</p>
   </div> 
  </div>

</div>
  </div>
</div></template>

<style scoped></style>