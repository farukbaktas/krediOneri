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
                <div class="border border-gray-600 w-[70%] mx-auto">
                    <div class="grid grid-cols-4 border-b border-gray-800 text-center">
                        <button :class="selectedLoan == 'ihtiyac' ? 'bg-gray-500' : ''" @click="selectedLoan = 'ihtiyac'" class="bg-gray-300 border-r border-gray-500 py-3 font-bold text-lg" href="#">İhtiyaç</button>
                        <button :class="selectedLoan == 'konut' ? 'bg-gray-500' : ''" @click="selectedLoan = 'konut'" class="bg-gray-300 border-r border-gray-500 py-3 font-bold text-lg" href="#">Konut</button>
                        <button :class="selectedLoan == 'tasit' ? 'bg-gray-500' : ''" @click="selectedLoan = 'tasit'" class="bg-gray-300 border-r border-gray-500 py-3 font-bold text-lg" href="#">Taşıt</button>
                        <button :class="selectedLoan == 'kobi' ? 'bg-gray-500' : ''" @click="selectedLoan = 'kobi'" class="bg-gray-300 py-3 font-bold text-lg" href="#">Kobi</button>
                    </div>
                    <div class="flex mb-4 p-4 space-x-2">
                        <input v-model.number="amount" class="border px-3 border-black outline-none w-full rounded py-1" placeholder="Kredi Tutarı" type="number">
                        <select v-model="maturity" class="border outline-none border-black w-full pr-8 rounded py-1">
                            <option value="12">1 Yıl (12 Ay)</option>
                            <option value="24">2 Yıl (24 Ay)</option>
                            <option value="36">3 Yıl (36 Ay)</option>
                            <option value="48">4 Yıl (48 Ay)</option>
                            <option value="60">5 Yıl (60 Ay)</option>
                            <option value="72">6 Yıl (72 Ay)</option>
                            <option value="84">7 Yıl (84 Ay)</option>
                            <option value="96">8 Yıl (96 Ay)</option>
                            <option value="108">9 Yıl (108 Ay)</option>
                            <option value="120">10 Yıl (120 Ay)</option>
                        </select>
                        <button @click="onSubmit" class="bg-orange-600 text-white py-2 w-full font-semibold rounded">Hesapla</button>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const amount = ref('');
const maturity = ref('24');
const selectedLoan = ref('konut');
const onSubmit = () => {
    router.push({path: '/konut-kredisi', query: {amount: amount.value, maturity: maturity.value}})
}
</script>