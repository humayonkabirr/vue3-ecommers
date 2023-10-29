<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-[#2e2e2e] py-1 hidden md:block">
    <ul class="flex mx-5 md:mx-24 text-white justify-end space-x-7 lg:space-x-16 text-[14px]">
      <li><i class="fa-solid fa-money-bill px-2"></i>Cash On Delivery</li>
      <li><i class="fa-solid fa-arrow-right-arrow-left px-2"></i> Fast Delivery And Exchange</li>
      <li><i class="fa-regular fa-circle-check px-2"></i>100% Genuine</li>
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
  <header class="bg-[#ff0b34] shadow-sm sticky top-0">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">  
      <div class="flex items-center justify-between md:justify-start">
        <!-- Menu Trigger -->
        <button type="button" class="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
          <svg class="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <!-- ./ Menu Trigger -->
  
        <a href="#" class="font-bold text-gray-700 text-2xl">Shop.</a>
  
        <div class="hidden md:flex space-x-3 flex-1 lg:ml-8">
          <a href="#" class="px-2 py-2 rounded-lg text-gray-200 duration-1000 hover:text-gray-400 hover:border">Electronics</a>
          <a href="#" class="px-2 py-2 rounded-lg text-gray-200 duration-1000 hover:text-gray-400 hover:border">Fashion</a>
          <a href="#" class="px-2 py-2 rounded-lg text-gray-200 duration-1000 hover:text-gray-400 hover:border">Tools</a>
          <a href="#" class="px-2 py-2 rounded-lg text-gray-200 duration-1000 hover:text-gray-400 hover:border">Books</a>
          <a href="#" class="px-2 py-2 rounded-lg text-gray-200 duration-1000 hover:text-gray-400 hover:border">More</a>
        </div>
  
        <div class="flex items-center space-x-4">
          <div class="relative hidden md:block">
            <input type="search" class="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search">
            <svg class="h-6 w-6 text-gray-100 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
  
          <a href="#" class="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
            <svg class="h-6 w-6 leading-none text-gray-100 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="pl-1 text-gray-500 text-md">0</span>
          </a>
  
          <button type="button" class="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center">
            <img src="https://avatars.dicebear.com/api/bottts/2.svg" alt="bottts" width="28" height="28" class="rounded-lg mx-auto">
          </button>
        </div>
      </div>
  
      <!-- Search Mobile -->
      <div class="relative md:hidden">
        <input type="search" class="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search">
  
        <svg class="h-6 w-6 text-gray-100 ml-2 mt-3 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <!-- ./ Search Mobile --> 
    </nav>
  </header>

  <RouterView />

  <footer class="bg-white py-2 z-10 md:hidden sticky bottom-0 shadow-[0px_-4px_10px_#a4a4a4]">
    <nav class="mx-2 sm:mx-5 md:mx-24">
      <ul class="w-full flex text-black justify-between px-4">
        <li class="hover:text-blue-300 cursor-pointer text-center">
          <router-link to="">
            <i class="fa fa-home"></i>
            <p class="uppercase text-[12px]">Home</p>
          </router-link>
        </li>
        <li class="hover:text-blue-300 cursor-pointer text-center">
          <router-link to="">
            <i class="fa fa-th-large"></i>
            <p class="uppercase text-[12px]">Category</p>
          </router-link>
        </li>
        <li class="hover:text-blue-300 cursor-pointer text-center">
          <router-link to="">
            <i class="fa fa-heart"></i>
            <p class="uppercase text-[12px]">Wishlist</p>
          </router-link>
        </li>
        <li class="hover:text-blue-300 cursor-pointer text-center">
          <router-link to="">
            <i class="fa fa-shopping-cart"></i>
            <p class="uppercase text-[12px]">Bag</p>
          </router-link>
        </li>
        <li class="hover:text-blue-300 cursor-pointer text-center">
          <router-link to="">
            <i class="fa fa-user-circle"></i>
            <p class="uppercase text-[12px]">Me</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
</style>
