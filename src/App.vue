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
  <header class="bg-[#ff0b34] py-2">
    <nav class="mx-2 sm:mx-5 md:mx-24  flex items-center space-x-6">
      <RouterLink to="/" class="w-[128px]">
        <img class="w-full h-[52px]" src="https://nkrmart.com/public/storage/images/general_setting/HXnCqk8BOWmVIjZIT4xIkrJeJQf2tcKJw3oLKeDJ.png">
      </RouterLink>
      <ul class="flex text-white space-x-6">
        <li class="hover:text-blue-300 cursor-pointer">Home</li>
        <li class="hover:text-blue-300 cursor-pointer">About</li>
        <li class="hover:text-blue-300 cursor-pointer">Contact</li>
      </ul>
      </nav>
  </header>
  

  <RouterView />

  <footer class="bg-white py-2 md:hidden sticky bottom-0 shadow-[0px_-4px_10px_#a4a4a4]">
    
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
