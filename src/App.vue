<script setup>  
import { RouterLink, RouterView } from 'vue-router';
import useAuth from "@/services/useAuth.js";
const { registrationSubmit } = useAuth();
registrationSubmit();
toastr.success('Welcome to visit');
</script>

 

<template>
  <div class="bg-[#2e2e2e] py-1 hidden md:block">
    <ul class="flex mx-5 md:mx-24 text-white justify-end space-x-7 lg:space-x-16 text-[14px]">
      <li><i class="px-2 fa-solid fa-money-bill"></i>Cash On Delivery</li>
      <li><i class="px-2 fa-solid fa-arrow-right-arrow-left"></i> Fast Delivery And Exchange</li>
      <li><i class="px-2 fa-regular fa-circle-check"></i>100% Genuine</li>
      <li>Language</li>
      <li>Account</li>
    </ul>
  </div>
  <div class="bg-[#2e2e2e] py-1 md:hidden">
    <ul class="flex mx-5 md:mx-24 text-white justify-between space-x-7 lg:space-x-16 text-[14px]">
      <li><i class="fa fa-phone"></i></li>
      <li><i class="fa fa-envelope"></i></li>
      <li><i class="fa fa-facebook-official"></i></li>
      <li><i class="fa fa-twitter"></i></li>
      <li><i class="fa fa-whatsapp"></i></li>
    </ul>
  </div>
  <header class="bg-[#010412]  shadow-sm sticky top-0 z-10">
    <nav class="px-4 py-1 mx-auto mb-2 sm:mx-5 md:mx-24 sm:px-6 lg:px-8 md:py-4">
      <div class="flex items-center justify-between md:justify-start">
        <!-- Menu Trigger -->
        <button type="button" class="flex items-center justify-center w-10 h-10 -ml-2 rounded-lg md:hidden">
          <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <!-- ./ Menu Trigger -->

        <router-link to="/">
          <img class="w-full h-[42px]"
            src="https://rahmansoutfit.com/admin/public/uploads/all/5hSpb8HKcK3lZ0BhNFloERDAeeUceUL0Lr5UqKrv.png" alt="">
        </router-link>

        <div class="flex-1 hidden space-x-3 md:flex lg:ml-8">
          <a href="#"
            class="px-2 py-2 text-gray-200 duration-100 hover:text-gray-400 hover:border-b hover-3">Electronics</a>
          <a href="#" class="px-2 py-2 text-gray-200 duration-100 hover:text-gray-400 hover:border-b hover-3">Fashion</a>
          <a href="#" class="px-2 py-2 text-gray-200 duration-100 hover:text-gray-400 hover:border-b hover-3">Tools</a>
          <a href="#" class="px-2 py-2 text-gray-200 duration-100 hover:text-gray-400 hover:border-b hover-3">Books</a>
          <a href="#" class="px-2 py-2 text-gray-200 duration-100 hover:text-gray-400 hover:border-b hover-3">More</a>
        </div>

        <div class="flex items-center space-x-4">
          <div class="relative hidden md:block">
            <input type="search"
              class="h-10 py-1 pl-10 pr-2 leading-none border border-gray-200 rounded-lg focus:border-gray-300 focus:outline-none focus:shadow-inner"
              placeholder="Search">
            <svg class="absolute top-0 left-0 w-6 h-6 mt-2 ml-2 text-gray-100 stroke-current"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <a href="#"
            class="flex items-center h-10 px-2 border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none hover:shadow-inner">
            <svg class="w-6 h-6 leading-none text-gray-100 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="pl-1 text-gray-500 text-md">0</span>
          </a>

          <button type="button"
            class="flex items-center justify-center hidden w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg md:block">
            <img src="https://avatars.dicebear.com/api/bottts/2.svg" alt="bottts" width="28" height="28"
              class="mx-auto rounded-lg">
          </button>
        </div>
      </div>

      <!-- Search Mobile -->
      <div class="relative md:hidden">
        <input type="search"
          class="w-full h-10 py-1 pl-10 pr-2 mt-1 leading-none border border-gray-200 rounded-lg focus:border-gray-300 focus:outline-none focus:shadow-inner"
          placeholder="Search">

        <svg class="absolute top-0 left-0 w-6 h-6 mt-3 ml-2 text-gray-100 stroke-current"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <!-- ./ Search Mobile -->
    </nav>
  </header>

  <RouterView />

  <footer class="bg-white py-2 z-10 md:hidden sticky bottom-0 shadow-[0px_-4px_10px_#a4a4a4]">
    <nav class="mx-2 sm:mx-5 md:mx-24">
      <ul class="flex justify-between w-full px-4 text-black">
        <li class="text-center cursor-pointer hover:text-blue-300">
          <router-link to="">
            <i class="fa fa-home"></i>
            <p class="uppercase text-[12px]">Home</p>
          </router-link>
        </li>
        <li class="text-center cursor-pointer hover:text-blue-300">
          <router-link to="">
            <i class="fa fa-th-large"></i>
            <p class="uppercase text-[12px]">Category</p>
          </router-link>
        </li>
        <li class="text-center cursor-pointer hover:text-blue-300">
          <router-link to="">
            <i class="fa fa-heart"></i>
            <p class="uppercase text-[12px]">Wishlist</p>
          </router-link>
        </li>
        <li class="text-center cursor-pointer hover:text-blue-300">
          <router-link to="">
            <i class="fa fa-shopping-cart"></i>
            <p class="uppercase text-[12px]">Bag</p>
          </router-link>
      </li>
      <li class="text-center cursor-pointer hover:text-blue-300">
        <router-link to="">
          <i class="fa fa-user-circle"></i>
          <p class="uppercase text-[12px]">Me</p>
        </router-link>
      </li>
    </ul>
  </nav>
</footer></template>

<style scoped></style>
