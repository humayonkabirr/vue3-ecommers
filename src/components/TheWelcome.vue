<script setup>
</script>

<template>
  <WelcomeItem>


    <div class="m-2 sm:mx-5 md:mx-24">
      <!-- Set up your HTML -->
      <div class="owl-carousel" id="sliders">
        <div class="" v-for="index in 5" :key="index">
          <img src="https://nkrmart.com/public/storage/images/slider/XLBVNKFCwyr709clkQ9JftbSca2PEWY68KNJJMDj.jpg" alt="">
        </div>
      </div>

      <!-- <div class="hidden grid-cols-0 lg:grid-cols-1 lg:block">
        <img class="w-full" src="https://nkrmart.com/public/storage/images/banner/EvNKpy6uJb9iS1okoBwB8GqnnxCBz1VkqiEHyu4U.jpg" alt="">
      </div> -->
    </div>

    <h1 class="mx-2 sm:mx-5 md:mx-24 mt-0 uppercase text-gray-700 text-xl lg:text-3xl font-extrabold text-center"
      style="font-family: 'Dancing Script', cursive, sans-serif;">
      Shop By Category
    </h1>



    <div class=" mx-auto w-full overflow-hidden relative">
      <div class="w-full h-full absolute">
        <div class="w-[6%] h-full absolute z-50 left-0"
          style="background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);"></div>
        <div class="w-[6%] h-full absolute z-50 right-0"
          style="background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);"></div>
      </div>

      <div class="carousel-items flex items-center justify-center"
        style="width: fit-content; animation: carouselAnim 10s infinite alternate linear;">

        <div v-for="item in 12" :key="item"
          class="carousel-focus flex items-center flex-col relative bg-white mx-1 my-10 p-2 border border-red-600 rounded-lg shadow-lg w-[200px]">
          <img class="rounded-xl"
            src="https://nkrmart.com/public/storage/images/subCategory/0RHRsQEQ4hHcFs8yU1bds6UwWdrOGm6Z5CbAADc0.jpg"
            alt="Img">
          <h1 class="mt-1">Shirt {{ item }}</h1>
        </div>

      </div>

    </div>

  </WelcomeItem>

  <WelcomeItem>
    <div class="mx-2 sm:mx-5 md:mx-24 ">
      <h1 class=" font-bold text-2xl">New Arrival Products</h1>

      <div class="owl-slider">
        <div id="carousel" class="owl-carousel">

          <div class="item" v-for="index in 30" :key="index">
            <div class="w-full max-w-sm bg-orange-50 border border-gray-200 rounded-lg shadow hover:shadow-xl">
              <a href="#"> 
                  <div class="m-2 overflow-hidden">
                  <img class=" rounded-t-lg hover:rotate-12 hover:scale-125 duration-500"
                  src="https://nkrmart.com/public/storage/images/product_thumbnail_img/thumbnail_1697615262_1412.jpg"
                  alt="product image" />
                </div>
              </a>
              <div class="px-2 pb-2 w-full">
                <a href="#">
                  <h5 class="font-semibold tracking-tight text-[10px] md:text-sm text-gray-900 truncate">
                    Apple Watch Series 7 GPS
                  </h5>
                </a>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-900">BDT 599</span>
                  <small class="text-red-600 text-xs line-through">BDT 599</small>
                </div>

                <div class="flex w-full items-center justify-between space-x-2px]">
                  <a href="#"
                    class="text-slate-900 w-5/6 hover:bg-[#ff0b34] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-2 py-1.5 text-center border border-[#ff0b34] ">
                    Order Now
                  </a>
                  <a href="#"
                    class="text-slate-900 w-1/6 hover:bg-[#ff0b34] focus:ring-4 border-l-0 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-r-md text-sm py-0.5 text-center border border-[#ff0b34] ">
                    <i class="fa-regular fa-heart text-lg hover:font-bold"></i>
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
      <h1 class=" font-bold text-2xl">Top Selling Product</h1>

      <div class="owl-slider">
        <div id="carousel" class="owl-carousel">

          <div class="item" v-for="index in 30" :key="index">
            <div class="w-full max-w-sm bg-orange-50 border border-gray-200 rounded-lg shadow hover:shadow-xl">
              <a href="#">
                <div class="m-2 overflow-hidden">
                  <img class=" rounded-t-lg hover:rotate-12 hover:scale-125 duration-500"
                  src="https://nkrmart.com/public/storage/images/product_thumbnail_img/169529915412.%20Sky%20+%20Pest.jpg"
                  alt="product image" />
                </div>
              </a>
              <div class="px-2 pb-2 w-full">
                <a href="#">
                  <h5 class="font-semibold tracking-tight text-[10px] md:text-sm text-gray-900 truncate">
                    Apple Watch Series 7 GPS
                  </h5>
                </a>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-900">BDT 599</span>
                  <small class="text-red-600 text-xs line-through">BDT 599</small>
                </div>

                <div class="flex w-full items-center justify-between space-x-2px]">
                  <a href="#"
                    class="text-slate-900 w-5/6 hover:bg-[#ff0b34] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-2 py-1.5 text-center border border-[#ff0b34] ">
                    Order Now
                  </a>
                  <a href="#"
                    class="text-slate-900 w-1/6 hover:bg-[#ff0b34] focus:ring-4 border-l-0 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-r-md text-sm py-0.5 text-center border border-[#ff0b34] ">
                    <i class="fa-regular fa-heart text-lg hover:font-bold"></i>
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
      <h1 class=" font-bold text-2xl">All Products </h1>



      <div class="flex justify-center my-4 mt-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">

          <div v-for="index in 30" :key="index">
            <div class="w-full max-w-sm bg-orange-50 border border-gray-200 rounded-lg shadow hover:shadow-lg duration-1000">
              <a href="#" class="">
                <div class="m-2 overflow-hidden">
                  <img class=" rounded-t-lg hover:rotate-12 hover:scale-125 duration-500"
                  src="https://nkrmart.com/public/storage/images/product_thumbnail_img/169529915412.%20Sky%20+%20Pest.jpg"
                  alt="product image" />
                </div>
              </a>
              <div class="px-2 pb-2 w-full">
                <a href="#">
                  <h5 class="font-semibold tracking-tight text-sm text-gray-900 truncate">
                    Apple Watch Series 7 GPS
                  </h5>
                </a>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-900">BDT 599</span>
                  <small class="text-red-600 text-xs line-through">BDT 599</small>
                </div>

                <div class="flex w-full items-center justify-between space-x-2px]">
                  <a href="#"
                    class="text-slate-900 w-5/6 hover:bg-[#ff0b34] focus:ring-4 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-l-md text-sm px-5 py-1.5 text-center border border-[#ff0b34] ">
                    Order Now
                  </a>
                  <a href="#"
                    class="text-slate-900 w-1/6 hover:bg-[#ff0b34] focus:ring-4 border-l-0 hover:text-white duration-700 focus:outline focus:ring-blue-300 font-semibold rounded-r-md text-sm py-0.5 text-center border border-[#ff0b34] ">
                    <i class="fa-regular fa-heart text-lg hover:font-bold"></i>
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-between py-16">
        <div class="text-center">
          <div class="service_container">
            <div class="">
              <div class=""><i
                  class="fa fa-thumbs-up text-5xl text-white bg-[#FF0B34] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
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
                  class="fa fa-headphones text-5xl text-white bg-[#FF0B34] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
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
                  class="fa fa-truck text-5xl text-white bg-[#FF0B34] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
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
                  class="fa fa-credit-card text-5xl text-white bg-[#FF0B34] p-4 rounded-[50%] border-8 border-[#c0c4c8]"></i>
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
    <footer class="bg-[#ff0b34]">
      <div class="mx-2 sm:mx-5 md:mx-24">
        <div class=" grid grid-cols-3 gap-8 py-8">
          <div class="w-full text-white">
            <img src="https://nkrmart.com/public/storage/images/general_setting/HXnCqk8BOWmVIjZIT4xIkrJeJQf2tcKJw3oLKeDJ.png" alt="">
            <p>
              nkrmart.com  is a growing fashion house in Bangladesh. Starting its journey in 2022.
            </p>
            <p>
              Unparalleled standard in design and quality is at the core of our business. Our goal is to lead the fashion industry by bringing quality products at affordable prices.

            </p>
          </div>
          <div class="w-full text-white">
            <img src="https://nkrmart.com/public/storage/images/general_setting/HXnCqk8BOWmVIjZIT4xIkrJeJQf2tcKJw3oLKeDJ.png" alt="">
            <p>
              nkrmart.com  is a growing fashion house in Bangladesh. Starting its journey in 2022.
            </p>
            <p>
              Unparalleled standard in design and quality is at the core of our business. Our goal is to lead the fashion industry by bringing quality products at affordable prices.

            </p>
          </div>
          <div class="w-full text-white">
            <img src="https://nkrmart.com/public/storage/images/general_setting/HXnCqk8BOWmVIjZIT4xIkrJeJQf2tcKJw3oLKeDJ.png" alt="">
            <p>
              nkrmart.com  is a growing fashion house in Bangladesh. Starting its journey in 2022.
            </p>
            <p>
              Unparalleled standard in design and quality is at the core of our business. Our goal is to lead the fashion industry by bringing quality products at affordable prices.

            </p>
          </div>


        </div>
      </div>


      <div class="bg-black py-4">
        <div class="mx-2 sm:mx-5 md:mx-24 flex justify-between text-white">
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