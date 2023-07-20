<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
      <TheHeader />
      <main class="flex-grow">
        <FeaturesBlocks />
        <Gallery />
        <HeroHome />
        <Features />
        <Testimonials />
        <Newsletter />
    </main>
    <TheFooter />
    <TheBanner />
    </div>
  
  
  </template>
  
  <script setup>
  import FeaturesBlocks from '../components/FeaturesBlocks.vue';
  import Gallery from '../components/Gallery.vue';
  import HeroHome from '../components/HeroHome.vue';
  import Features from '../components/Features.vue';
  import Testimonials from '../components/Testimonials.vue';
  import Newsletter from '../components/Newsletter.vue';
  
  </script>