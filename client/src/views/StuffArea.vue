<template>
    <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <TheHeader />
    <!-- Page content -->
    <main class="flex-grow">
    <section class="bg-gradient-to-b from-gray-100 to-white">
        <div class="w-full mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
                <table class="table-auto w-full text-lg border">
                        <thead class="border-b border-gray-400">
                            <tr>
                                <th>Banka Adı</th>
                                <th>Banka ID</th>
                                <th>Logo</th>
                                <th>
                                    <table class="w-full">
                                        <tr class="grid grid-cols-7">
                                            <th>Adı</th>
                                            <th>Product ID</th>
                                            <th>Miktar</th>
                                            <th>Vade</th>
                                            <th>Faiz Oranı</th>
                                            <th>Expertiz Ü.</th>
                                            <th>Tahsis Ü.</th>
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="product in products" :key="product" class="text-center">
                            <tr v-if="product.houseLoans.length == 0">
                                <td class="border py-2">{{ product.name }}</td>
                                <td class="border">{{ product.id }}</td>
                                <td class="border"><div class="items-center justify-center flex"><img width="80" :src="product.logoUri" :alt="`Logo of ${product.name}`"></div></td>
                            </tr>
                            <tr v-else v-for="credit in product.houseLoans" :key="credit">
                                <td class="border py-2">{{ product.name }}</td>
                                <td class="border">{{ product.id }}</td>
                                <td class="border"><div class="items-center justify-center flex"><img width="80" :src="product.logoUri" :alt="`Logo of ${product.name}`"></div></td>
                                <td class="border">
                                    <table class="w-full font-medium text-sm">
                                        <tbody>
                                            <tr class="grid grid-cols-7">
                                                <td>{{ credit.creditName }}</td>
                                                <td>{{ credit.productId }}</td>
                                                <td>{{ credit.creditAmount.min.toLocaleString() }} - {{ credit.creditAmount.max.toLocaleString() }}</td>
                                                <td>{{ credit.creditTerm.min }} - {{ credit.creditTerm.max}}</td>
                                                <td>{{ credit.interestRate }}</td>
                                                <td>{{ credit.appraisementFee }}</td>
                                                <td>{{ credit.mortgageFee }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                        </table>
            </div>
        </div>
        </div>
    </section>

    </main>

    <TheBanner />

    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const products = ref('');
axios('http://localhost:1111/api/getall')
    .then((res) => {
        products.value = res.data.banks
    })

</script>