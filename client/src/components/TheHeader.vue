<template>
    <header :class="yOffset > 20 ? 'bg-purple-800 backdrop-blur-sm shadow-lg text-gray-100' : ''" class="fixed w-full text-gray-700 z-30 md:bg-opacity-100 transition duration-300 ease-in-out">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="flex items-center justify-start h-16 md:h-20">
            <!-- Site branding -->
              <div class="flex-shrink-0 mr-4">
                <!-- Logo -->
                <a href="/" class="block" aria-label="Cruip">
                    <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo"><stop stop-color="#4FD1C5" offset="0%"></stop><stop stop-color="#81E6D9" offset="25.871%"></stop><stop stop-color="#338CF5" offset="100%"></stop></radialGradient></defs><rect width="32" height="32" rx="16" fill="url(#header-logo)" fill-rule="nonzero"></rect></svg>
                </a>
              </div>
              <div class="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1 ml-60">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Company</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Marketplace</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Features</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Team</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const yOffset = ref();

window.addEventListener("scroll", () => {
  yOffset.value = window.scrollY
});
</script>