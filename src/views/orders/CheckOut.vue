<script setup>
import { useRoute, RouterLink } from "vue-router";
import ServiceCall from "@/services/Services.js";

const { getProdcutDeteails, getProductsPelated, resProductsPelated } = ServiceCall();

const route = useRoute();
getProdcutDeteails(route.params.id)
getProductsPelated(route.params.id)


</script>
<template>
  <div class="m-2 sm:mx-5 md:mx-24 my-8 grid grid-cols-12 space-x-3">
    <div class="col-span-6">

      <div class="w-full ">

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-12 border-b-2 border-red-600 text-center">
            <h1 class="text-3xl">Place Your Order</h1>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name*
            </label>
            <input
              class="shadow appearance-none border  border-red-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="name">
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber">
              Mobile Number *
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber" type="number" placeholder="Mobile Number">
          </div>

          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber">
              District *
            </label>
            <div class="relative">
              <select
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state">
                <option value="31">
                  Bagerhat
                </option>
                <option value="8">
                  Bandorbon
                </option>
                <option value="2">
                  Barguna
                </option>
                <option value="3">
                  Barisal
                </option>
                <option value="4">
                  Bhola
                </option>
                <option value="45">
                  Bogura
                </option>
                <option value="9">
                  Brahmanbaria
                </option>
                <option value="10">
                  Chandpur
                </option>
                <option value="49">
                  Chapainawabganj
                </option>
                <option value="11">
                  Chottogram
                </option>
                <option value="32">
                  Chuadanga
                </option>
                <option value="13">
                  Cox'Bazar
                </option>
                <option value="12">
                  Cumilla
                </option>
                <option value="1">
                  Dhaka
                </option>
                <option value="53">
                  Dinajpur
                </option>
                <option value="19">
                  Faridpur
                </option>
                <option value="14">
                  Feni
                </option>
                <option value="54">
                  Gaibandha
                </option>
                <option value="20">
                  Gazipur
                </option>
                <option value="21">
                  Gopalgonj
                </option>
                <option value="61">
                  Hobigonj
                </option>
                <option value="5">
                  Jalokathi
                </option>
                <option value="41">
                  Jamalpur
                </option>
                <option value="33">
                  Jessore
                </option>
                <option value="34">
                  Jhenaidah
                </option>
                <option value="46">
                  Joypurhat
                </option>
                <option value="15">
                  Khagrachari
                </option>
                <option value="35">
                  Khulna
                </option>
                <option value="22">
                  Kishorgonj
                </option>
                <option value="55">
                  Kurigram
                </option>
                <option value="36">
                  Kusthia
                </option>
                <option value="16">
                  Lakshmipur
                </option>
                <option value="56">
                  Lalmonirhat
                </option>
                <option value="23">
                  Madaripur
                </option>
                <option value="37">
                  Magura
                </option>
                <option value="24">
                  Manikgonj
                </option>
                <option value="38">
                  Meherpur
                </option>
                <option value="62">
                  Mowlovibazar
                </option>
                <option value="25">
                  Munshigonj
                </option>
                <option value="42">
                  Mymensingh
                </option>
                <option value="47">
                  Naogaon
                </option>
                <option value="39">
                  Narail
                </option>
                <option value="26">
                  Narayangonj
                </option>
                <option value="27">
                  Narsingdhi
                </option>
                <option value="48">
                  Natore
                </option>
                <option value="43">
                  Netrokona
                </option>
                <option value="57">
                  Nilphamari
                </option>
                <option value="17">
                  Noakhali
                </option>
                <option value="66">
                  Outside of Dhaka
                </option>
                <option value="50">
                  Pabna
                </option>
                <option value="58">
                  Panchagarh
                </option>
                <option value="6">
                  Patuakhali
                </option>
                <option value="7">
                  Pirojpur
                </option>
                <option value="28">
                  Rajbari
                </option>
                <option value="51">
                  Rajshahi
              </option>
              <option value="18">
                Rangamati
              </option>
              <option value="59">
                Rangpur
              </option>
              <option value="40">
                Satkhira
              </option>
              <option value="29">
                Shariatpur
              </option>
              <option value="44">
                Sherpur
              </option>
              <option value="52">
                Sirajgonj
              </option>
              <option value="63">
                Sunamgonj
              </option>
              <option value="64">
                Sylhet
              </option>
              <option value="30">
                Tangail
              </option>
              <option value="60">
                Thakurgaon
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber">
              Thana/Upazila *
            </label>
            <div class="relative">
              <select
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state">
                <option value="31">
                  Bagerhat
                </option>
                <option value="8">
                  Bandorbon
                </option>
                <option value="2">
                  Barguna
                </option>
                <option value="3">
                  Barisal
                </option>
                <option value="4">
                  Bhola
                </option>
                <option value="45">
                  Bogura
                </option>
                <option value="9">
                  Brahmanbaria
                </option>
                <option value="10">
                  Chandpur
                </option>
                <option value="49">
                  Chapainawabganj
                </option>
                <option value="11">
                  Chottogram
                </option>
                <option value="32">
                  Chuadanga
                </option>
                <option value="13">
                  Cox'Bazar
                </option>
                <option value="12">
                  Cumilla
                </option>
                <option value="1">
                  Dhaka
                </option>
                <option value="53">
                  Dinajpur
                </option>
                <option value="19">
                  Faridpur
                </option>
                <option value="14">
                  Feni
                </option>
                <option value="54">
                  Gaibandha
                </option>
                <option value="20">
                  Gazipur
                </option>
                <option value="21">
                  Gopalgonj
                </option>
                <option value="61">
                  Hobigonj
                </option>
                <option value="5">
                  Jalokathi
                </option>
                <option value="41">
                  Jamalpur
                </option>
                <option value="33">
                  Jessore
                </option>
                <option value="34">
                  Jhenaidah
                </option>
                <option value="46">
                  Joypurhat
                </option>
                <option value="15">
                  Khagrachari
                </option>
                <option value="35">
                  Khulna
                </option>
                <option value="22">
                  Kishorgonj
                </option>
                <option value="55">
                  Kurigram
                </option>
                <option value="36">
                  Kusthia
                </option>
                <option value="16">
                  Lakshmipur
                </option>
                <option value="56">
                  Lalmonirhat
                </option>
                <option value="23">
                  Madaripur
                </option>
                <option value="37">
                  Magura
                </option>
                <option value="24">
                  Manikgonj
                </option>
                <option value="38">
                  Meherpur
                </option>
                <option value="62">
                  Mowlovibazar
                </option>
                <option value="25">
                  Munshigonj
                </option>
                <option value="42">
                  Mymensingh
                </option>
                <option value="47">
                  Naogaon
                </option>
                <option value="39">
                  Narail
                </option>
                <option value="26">
                  Narayangonj
                </option>
                <option value="27">
                  Narsingdhi
                </option>
                <option value="48">
                  Natore
                </option>
                <option value="43">
                  Netrokona
                </option>
                <option value="57">
                  Nilphamari
                </option>
                <option value="17">
                  Noakhali
                </option>
                <option value="66">
                  Outside of Dhaka
                </option>
                <option value="50">
                  Pabna
                </option>
                <option value="58">
                  Panchagarh
                </option>
                <option value="6">
                  Patuakhali
                </option>
                <option value="7">
                  Pirojpur
                </option>
                <option value="28">
                  Rajbari
                </option>
                <option value="51">
                  Rajshahi
              </option>
              <option value="18">
                Rangamati
              </option>
              <option value="59">
                Rangpur
              </option>
              <option value="40">
                Satkhira
              </option>
              <option value="29">
                Shariatpur
              </option>
              <option value="44">
                Sherpur
              </option>
              <option value="52">
                Sirajgonj
              </option>
              <option value="63">
                Sunamgonj
              </option>
              <option value="64">
                Sylhet
              </option>
              <option value="30">
                Tangail
              </option>
              <option value="60">
                Thakurgaon
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

          <div class="">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber">
              Address *
            </label>
             <textarea name="" id="" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-[#ff0b34] w-full hover:bg-transparent hover:text-black border border-[#ff0b34] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
          
        </div>
      </form>
      
    </div>
  </div>

  <div class="col-span-6">

  </div>
</div></template>

<style scoped></style>