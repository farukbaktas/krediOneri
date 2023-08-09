<template>
    <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site Header-->
    <TheHeader />
    
    <!-- Page content-->
    <main class="flex-grow">
        <section class="bg-gradient-to-b from-gray-100 to-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="border border-purple-600 w-[70%] mx-auto rounded-lg mt-32">
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
                            <p class="mb-4 ml-6 text-sm text-gray-500">We’ll never share your details. Read our <a href="#" class="font-medium text-purple-600 hover:underline">Privacy Policy</a>.</p>
                        </div>
                    </div>
                <div class="flex mt-12 pb-12 space-y-5">
                    <div class="flex-2">
                        <div class="">



                            <section class="container px-4 mx-auto">
                                <h2 class="text-lg font-medium text-gray-800">Konut Kredisi</h2>

                                <p class="mt-1 text-sm text-gray-500 ">These companies have purchased in the last 12 months.</p>

                                <div class="flex flex-col mt-6">
                                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div class="overflow-hidden border border-gray-200  md:rounded-lg">

                                                <table class="min-w-full divide-y divide-gray-200 ">
                                                    <thead class="bg-gray-50 ">
                                                        <tr>
                                                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                                    <span>Banka</span>
                                                                </button>
                                                            </th>

                                                            <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                Faiz oranı
                                                            </th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                Aylık Taksi
                                                            </th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                                Toplam Ödeme</th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                License use</th>

                                                            <th scope="col" class="relative py-3.5 px-4">
                                                                <span class="sr-only">Edit</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white divide-y divide-gray-200 ">
                                                        <tr>
                                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 ">Catalog</h2>
                                                                    <p class="text-sm font-normal text-gray-600">catalogapp.io</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60">
                                                                    Customer
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div>
                                                                    <h4 class="text-gray-700">Content curating app</h4>
                                                                    <p class="text-gray-500">Brings all your news into one place</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                                                    <div class="bg-blue-500 w-2/3 h-1.5"></div>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800">Circooles</h2>
                                                                    <p class="text-sm font-normal text-gray-600 ">getcirooles.com</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full">
                                                                    Churned
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div>
                                                                    <h4 class="text-gray-700">Design software</h4>
                                                                    <p class="text-gray-500 ">Super lightweight design app</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                                                    <div class="bg-blue-500 w-2/5 h-1.5"></div>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 ">Sisyphus</h2>
                                                                    <p class="text-sm font-normal text-gray-600">sisyphus.com</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 ">
                                                                    Customer
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div>
                                                                    <h4 class="text-gray-700 ">Automation and workflow</h4>
                                                                    <p class="text-gray-500 ">Time tracking, invoicing and expenses</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                                                    <div class="bg-blue-500 w-11/12 h-1.5"></div>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 ">Hourglass</h2>
                                                                    <p class="text-sm font-normal text-gray-600 ">hourglass.app</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full ">
                                                                    Churned
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div>
                                                                    <h4 class="text-gray-700 ">Productivity app</h4>
                                                                    <p class="text-gray-500 ">Time management and productivity</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                                                    <div class="bg-blue-500 w-1/3 h-1.5"></div>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 ">Quotient</h2>
                                                                    <p class="text-sm font-normal text-gray-600 ">quotient.co</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                                <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                    Customer
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div>
                                                                    <h4 class="text-gray-700">Sales CRM</h4>
                                                                    <p class="text-gray-500 ">Web-based sales doc management</p>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                                                    <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full " src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                                                    <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                                                    <div class="bg-blue-500 w-1/6 h-1.5"></div>
                                                                </div>
                                                            </td>

                                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between mt-6">

                                </div>
                            </section>



                        </div>
                    </div>
                    <div class="flex-1 pl-12">

                        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
                            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl">
                                En çok Tercih Edilenler
                            </h5>
                            <p class="text-sm font-normal text-gray-500 ">Connect with one of our available wallet providers or create a new one.</p>
                            <ul class="my-4 space-y-3">
                                <li>
                                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                                        <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-300 rounded bg-gray-700 ">Popular</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <svg aria-hidden="true" class="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <svg aria-hidden="true" svg class="h-5" viewBox="0 0 75.591 75.591" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#ff1b2d"/><stop offset=".3" stop-color="#ff1b2d"/><stop offset=".614" stop-color="#ff1b2d"/><stop offset="1" stop-color="#a70014"/></linearGradient><linearGradient id="b" gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#9c0000"/><stop offset=".7" stop-color="#ff4b4b"/><stop offset="1" stop-color="#ff4b4b"/></linearGradient><g transform="matrix(1.3333 0 0 -1.3333 0 107.2)"><path d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z" fill="url(#a)"/><path d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297" fill="url(#b)"/></g></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <svg aria-hidden="true" class="h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient cx="0%" cy="50%" fx="0%" fy="50%" r="100%" id="radialGradient-1"><stop stop-color="#5D9DF6" offset="0%"></stop><stop stop-color="#006FFF" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo"><rect id="base" fill="url(#radialGradient-1)" x="0" y="0" width="512" height="512" rx="256"></rect><path d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z" id="WalletConnect" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline">
                                    <svg class="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    Why do I need to connect with my wallet?</a>
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
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const amount = ref('');
    const maturity = ref('selected');
    const selectedLoan = ref('ihtiyac');
    const onSubmit = () => {
        router.push({path: '/ihtiyac-kredisi', query: {amount: amount.value, maturity: maturity.value}})
    }
</script>