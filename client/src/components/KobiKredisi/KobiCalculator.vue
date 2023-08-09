<template>
    <main class="flex-grow">
        <section class="bg-gradient-to-b from-gray-100 to-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pt-4 pb-4 space-y-5">
                    <!-- BANK 1 -->
                    <div class="border border-purple-600 w-[70%] mx-auto rounded-lg">
                        <div class="grid grid-cols-4 border-b border-gray-800 text-center">
                            <a class="bg-gray-200 border-r border-gray-500 py-3 font-bold text-lg rounded-tl-lg" href="/kredi/ihtiyac">Ihtiyaç</a>
                            <a class="bg-gray-200 border-r border-gray-500 py-3 font-bold text-lg" href="/kredi/konut">Konut</a>
                            <a class="bg-gray-200 border-r border-gray-500 py-3 font-bold text-lg " href="/kredi/tasit">Taşıt</a>
                            <a class="bg-gradient-to-r from-pink-400 to-purple-900 text-gray-200 py-3 font-bold text-lg rounded-tr-lg" href="">Kobi</a>
                        </div>
                        <div class="flex flex-col">
                        <div class="flex p-6 space-x-2">
                                <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" placeholder="Kredi Tutarı">
                                <select v-model="maturity" class="border outline-none bg-gray-200 border-gray-300 w-full text-gray-500 pr-8 rounded py-1">
                                <option value="selected">Kredi Vadesi</option>
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
                            <button @click="onSubmit" class="bg-purple-800 border-gray-300 text-white py-2 w-full font-semibold rounded">Hesapla</button>
                        </div>
                            <p class="mb-4 ml-4 text-sm text-gray-500">We’ll never share your details. Read our <a href="#" class="font-medium text-purple-600 hover:underline">Privacy Policy</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    </template>
    <script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const amount = ref('');
    const maturity = ref('selected');
    const selectedLoan = ref('konut');
    const onSubmit = () => {
        router.push({path: '/konut-kredisi', query: {amount: amount.value, maturity: maturity.value}})
    }
    </script>