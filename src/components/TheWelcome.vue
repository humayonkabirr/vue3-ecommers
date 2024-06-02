<script setup>
import useAuth from "@/services/useAuth.js";
import ServiceCall from "@/services/Services.js";
import { reactive } from "vue";

const { registrationSubmit } = useAuth();
const { getSliders, resSliders, getProductsBestseller, resBestSelling, getData, resData, resCateData, getProductsFeatured, resGeteatured, getCategory } = ServiceCall();

getData('products?page=1');
getCategory('categories/featured');
getProductsFeatured('products/featured');
getSliders('sliders');
getProductsBestseller('products/best-seller');


const currentTimestamp = reactive({
  full: Date.now(),
  last11: Date.now() % 1e11
}); 


const registration = reactive({
  name: currentTimestamp.full % 1e11,
  email_or_phone: currentTimestamp.full % 1e11,
  password: currentTimestamp.full % 1e11,
  password_confirmation: currentTimestamp.full % 1e11,
  register_by: "phone"
});

registrationSubmit(registration);

// const loginData = reactive({
//   "email": "customer@example.com",
//   "password": "123456"
// });

// login(loginData);

</script>

<template>
  <WelcomeItem>
    <div class="m-2 sm:mx-5 md:mx-24">
      <!-- Set up your HTML -->
      <div class="w-full owl-carousel" id="sliders">
        <div class="flex w-full">
          <img class="w-full" v-for="slider in resSliders.data" :key="slider" :src="slider.photo" alt="slider image">
        </div>
      </div>

      <!-- <div class="hidden grid-cols-0 lg:grid-cols-1 lg:block">
        <img class="w-full" src="https://nkrmart.com/public/storage/images/banner/EvNKpy6uJb9iS1okoBwB8GqnnxCBz1VkqiEHyu4U.jpg" alt="">
      </div> -->
    </div>

    <h1 class="mx-2 mt-0 text-xl font-extrabold text-center text-gray-700 uppercase sm:mx-5 md:mx-24 lg:text-3xl"
      style="font-family: 'Dancing Script', cursive, sans-serif;">
      Shop By Category
    </h1>



    <div class="relative w-full mx-auto overflow-hidden ">
      <div class="absolute w-full h-full">
        <div class="w-[6%] h-full absolute z-50 left-0"
          style="background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);"></div>
        <div class="w-[6%] h-full absolute z-50 right-0"
          style="background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);"></div>
      </div>
      <div class="flex items-center justify-center carousel-items"
        style="width: fit-content; animation: carouselAnim 10s infinite alternate linear;">

        <div v-for="item in resCateData.data" :key="item"
          class="carousel-focus flex items-center flex-col relative bg-white mx-1 my-10 p-2 border border-red-600 rounded-lg shadow-lg w-[200px]">
          <img class="rounded-xl" :src="item.banner" alt="Img">
          <h1 class="mt-1">Shirt {{ item.name }}</h1>
        </div>

      </div>

    </div>

  </WelcomeItem>

  <WelcomeItem>
    <div v-if="resGeteatured" class="mx-2 sm:mx-5 md:mx-24 ">
      <h1 class="my-2 text-2xl font-bold ">New Arrival Products</h1>
      <div class="owl-slider">
        <div id="carousel" class="grid grid-cols-5 owl-carousel">

          <div class="w-full item" v-for="newArrival in 6" :key="newArrival.name">
            <div class="w-full border border-gray-200 rounded-lg shadow bg-orange-50 hover:shadow-xl">
              <router-link :to="`details/5`">
                <div class="m-2 overflow-hidden">
                  <img class="duration-500 rounded-t-lg hover:rotate-12 hover:scale-125 h-52"
                    src="https://rahmansoutfit.com/admin/public/uploads/all/IyZrIto7yYh33pCFOEqdHc489nWU0If1mjD724J9.jpg"
                    alt="product image" />
                </div>
              </router-link>
              <div class="w-full px-2 pb-2">
                <router-link :to="`details/5`">
                  <h5 class="font-semibold tracking-tight text-[10px] md:text-sm text-gray-900 truncate">
                    {{ newArrival.name }}
                  </h5>
                </router-link>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-900">BDT 599</span>
                  <small class="text-xs text-red-600 line-through">BDT 599</small>
                </div>

                <div class="flex w-full items-center justify-between">
                  <a href="#"
                    class="text-slate-900 w-5/6 hover:bg-[#010412] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-2 py-1.5 text-center border border-[#010412] ">
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


    </div>
  </WelcomeItem>

  <WelcomeItem>
    <div v-if="resBestSelling" class="mx-2 mt-8 sm:mx-5 md:mx-24">
      <h1 class="my-2 text-2xl font-bold ">Top Selling Product</h1>
      <div class="owl-slider">
        <div id="carousel" class="owl-carousel">


          <div v-for="bestSell in 2" :key="bestSell"
            class="border border-gray-200 rounded-lg shadow bg-orange-50 hover:shadow-xl">
            <router-link :to="`details/6`">
              <div class="m-2 overflow-hidden">
                <img class="duration-500 rounded-t-lg hover:rotate-12 hover:scale-125  h-52"
                  src="https://rahmansoutfit.com/admin/public/uploads/all/IyZrIto7yYh33pCFOEqdHc489nWU0If1mjD724J9.jpg"
                  alt="product image" />
              </div>
            </router-link>
            <div class="px-2 pb-2">
              <router-link :to="`details/6`">
                <h5 class="font-semibold tracking-tight text-[10px] md:text-sm text-gray-900 truncate">
                  {{ bestSell.name }}
                </h5>
              </router-link>

              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-900">BDT 599</span>
                <small class="text-xs text-red-600 line-through">BDT 599</small>
              </div>

              <div class="flex w-full items-center justify-between">
                <a href="#"
                  class="text-slate-900 w-5/6 hover:bg-[#010412] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-2 py-1.5 text-center border border-[#010412] ">
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
  </WelcomeItem>

  <WelcomeItem>
    <div class="m-8 mx-2 sm:mx-5 md:mx-24">
      <h1 class="text-2xl font-bold ">All Products </h1>

      <div class="flex justify-center my-4 mt-6">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          <div v-for="item2 in resData.data" :key="item2">
            <div
              class="w-full max-w-sm duration-1000 border border-gray-200 rounded-lg shadow bg-orange-50 hover:shadow-lg">

              <router-link :to="`details/${item2.id}`">
                <div class="m-2 overflow-hidden">
                  <img class="duration-500 rounded-t-lg hover:rotate-12 hover:scale-125 h-52"
                    :src="item2.thumbnail_image" alt="product image" />
                </div>
              </router-link>
              <div class="w-full px-2 pb-2">
                <router-link :to="`details/${item2.id}`">
                  <h5 class="text-sm font-semibold tracking-tight text-gray-900 truncate">
                    {{ item2.name }}
                  </h5>
                </router-link>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-900">{{ item2.main_price }}</span>
                  <small class="text-xs text-red-600 line-through">{{ item2.stroked_price }}</small>
                </div>

                <div class="flex w-full items-center justify-between">
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



    </div>
  </WelcomeItem>

  <WelcomeItem>
    <div class="mx-2 sm:mx-5 md:mx-24 ">
      <div class="grid justify-between grid-cols-2 gap-6 py-16 md:grid-cols-4">
        <div class="text-center">
          <div class="service_container">
            <div class="">
              <div class=""><i
                  class="fa fa-thumbs-up text-5xl text-white bg-[#010412] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
              </div>
            </div>
            <div class="service_text">
              <h4>
                High-quality Goods
              </h4>
              <small>
                Enjoy top quality items for less
              </small>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner"><i
                  class="fa fa-headphones text-5xl text-white bg-[#010412] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
              </div>
            </div>
            <h4>
              24/7 Live Chat
            </h4>
            <small>
              Get instant assistance whenever you need it
            </small>
          </div>
        </div>
        <div class="text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner"><i
                  class="fa fa-truck text-5xl text-white bg-[#010412] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
              </div>
            </div>
            <h4>
              Express Shipping
            </h4>
            <small>
              Fast &amp; reliable delivery options
            </small>
          </div>
        </div>
        <div class="text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner"><i
                  class="fa fa-credit-card text-5xl text-white bg-[#010412] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
              </div>
            </div>
            <h4>
              Secure Payment
            </h4>
            <small>
              Multiple safe payment methods
            </small>
          </div>
        </div>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <footer class="bg-[#010412]">
      <div class="mx-2 sm:mx-5 md:mx-24">
        <div class="grid grid-cols-3 gap-8 py-8 ">
          <div class="w-full text-white">
            <img src="https://rahmansoutfit.com/admin/public/uploads/all/5hSpb8HKcK3lZ0BhNFloERDAeeUceUL0Lr5UqKrv.png"
              alt="">

          </div>
          <div class="flex justify-between w-full space-x-8 text-white">
            <div>
              <h1 class="text-2xl">Quick Links</h1>

              <router-link to="/">About Us</router-link><br>
              <router-link to="/">Contact Us</router-link><br>
            </div>
            <div>
              <h1 class="text-2xl">Information</h1>

              <div class="">
                <router-link to="/">How to order</router-link> <br>
                <router-link to="/">Return Policy</router-link><br>
                <router-link to="/">Shipment</router-link><br>
              </div>
            </div>
          </div>
          <div class="w-full text-white">
            <h1 class="text-2xl text-black">Follow Us</h1>

          </div>


        </div>
      </div>


      <div class="py-4 bg-black">
        <div class="flex justify-between mx-2 text-white sm:mx-5 md:mx-24">
          <div>
            Copyright © alsdkfjaslkf.com 2022 All rights reserved
          </div>
          <div class="">
            <a href="#" target="_blank">Developed by Rifat</a>
          </div>
        </div>

      </div>
    </footer>
  </WelcomeItem>
</template>

<style>
@keyframes carouselAnim {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(calc(-100% + (6*300px)));
  }
}

@media only screen and (max-width: 768px) {
  .container .carousel-items {
    animation: carouselAnim 60s infinite alternate linear;
  }

  @keyframes carouselAnim {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(calc(-100% + (5*300px)));
    }
  }
}

.carousel-focus:hover {
  transition: all 0.8s;
  transform: scale(1.1);
}
</style>