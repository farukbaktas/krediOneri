<template>
    <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site Header-->
    <TheHeader />
    <!-- Page content-->
    <main class="flex-grow">
        <section class="bg-gradient-to-b from-gray-100 to-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pt-32 pb-12 md:pt-40 md:pb-20 space-y-5">
                    <table class="table-auto w-full text-lg">
                        <thead class="border-b border-gray-400">
                            <tr>
                                <th>Taksit</th>
                                <th>Anapara</th>
                                <th>Faiz</th>
                                <th>KKDF</th>
                                <th>BSMV</th>
                                <th>Bakiye</th>
                            </tr>
                        </thead>
                        <tbody v-for="payment in paymentPlans" :key="payment" class="text-center">
                            <tr>
                                <td class="border-l flex border-gray-400 px-2 py-3 space-x-8">
                                    <span class="font-bold text-lg">{{ payment.currentMaturity }}</span>
                                    <span>{{ payment.monthlyInstallment.toLocaleString() }} TL</span>
                                </td>
                                <td class="border-x border-gray-400 px-5 py-3">{{ payment.mainAmount.toLocaleString() }} TL</td>
                                <td class="border-x border-gray-400 px-5 py-2">{{ (Number(payment.interestPayment)).toLocaleString() }} TL</td>
                                <td class="border-x border-gray-400 px-5 py-2">0 TL</td>
                                <td class="border-x border-gray-400 px-5 py-2">0 TL</td>
                                <td class="border-x border-gray-400 px-5 py-2">{{ (Number(payment.mainBalance.toFixed(2))).toLocaleString() }} TL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </main>

<TheBanner />

</div>
</template>

<script setup>
const props = defineProps({id: String});
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
const route = useRoute();
const paymentPlans = ref([]);
axios.get(`http://localhost:5000/api//housingloan/detail/?bankSeoName=${props.id}&amount=${route.query.amount}&maturity=${route.query.maturity}`)
    .then(res => paymentPlans.value = res.data.productInfo.monthlyPayments)
    .catch(err => console.log(err))

</script>