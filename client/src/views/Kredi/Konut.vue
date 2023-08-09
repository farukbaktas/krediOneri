<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
    
    <!-- Site Header-->
    <TheHeader />
    <!-- Section header -->
    <div class="max-w-4xl mx-auto text-center pb-8 pt-16">
            <h2 class="!text-5xl h2 font-extrabold mb-4 mt-12">Hayatın <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-900">Konut</span> yolculuğunda size rehberlik etmek</h2>
            <p class="text-xl text-purple-800">Karmaşıklıktan kurtulup kolay Kredi Öneri yardımlarıyla adımlarla finans koçunuz kendiniz olun.</p>
    </div>
    <!-- Page content-->
    <KonutCalculator/>
<TheBanner />

</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import KonutCalculator from '../../components/KonutKredisi/KonutCalculator.vue';
const router = useRouter();
const amount = ref('');
const maturity = ref('24');
const selectedLoan = ref('konut');
const onSubmit = () => {
    router.push({path: '/konut-kredisi', query: {amount: amount.value, maturity: maturity.value}})
}
</script>