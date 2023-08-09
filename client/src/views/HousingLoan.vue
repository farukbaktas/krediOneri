<template>
    <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site Header-->
    <TheHeader />
    
    <!-- Page content-->
    <main class="flex-grow">
        <section class="bg-gradient-to-b from-gray-100 to-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pt-32 pb-12 md:pt-40 md:pb-20 space-y-5">
                    <!-- BANK 1 -->
                    <div v-for="product in products" :key="product.id" class="border-2 rounded-md border-gray-500 grid grid-cols-4 gap-8 py-8 place-items-center">
                        <div class="col-span-1">
                            <img width="120" :src="product.bank.logoUri" alt="">
                            <h5>{{ product.creditName }}</h5>
                        </div>
                        <div class="flex justify-between col-span-2 space-x-24">
                            <div>
                                <h5 class="font-thin">Faiz Oranı</h5>
                                <span class="text-lg font-medium">% {{ product.interestRate }}</span>
                            </div>
                            <div>
                                <h5>Aylık Taksit</h5>
                                <span class="text-lg font-medium">{{ product.monthlyInstallment.toLocaleString() }} <small class="text-xs">TL</small></span>
                            </div>
                            <div>
                                <h5>Toplam Ödeme</h5>
                                <span class="text-lg font-medium">{{ product.totalAmount.toLocaleString() }} <small class="text-xs">TL</small></span>
                            </div>
                        </div>
                        <div class="col-span-1 flex justify-center">
                            <div>
                                <button class="border-2 block px-6 py-1.5 text-orange-400 border-orange-500">Hemen Başvur</button>
                                <router-link class="block text-center mt-1 border-b-2 border-gray-900" :to="{path: `/konut-kredisi/${product.bank.seoName}`, query: {amount: 100000, maturity: 120}}">Detay</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

<TheBanner />

</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
const products = ref([]);
const route = useRoute();
axios(`http://localhost:1111/api/housingloan/?amount=${route.query.amount}&maturity=${route.query.maturity}`)
    .then(res => {
        products.value = res.data.products
    }).catch(err => console.log(err))
</script>