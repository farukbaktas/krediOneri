import React from 'react';

function FeaturesHome() {

    return (
        <section>
{/* En uygun oranlar başlığı */}
            <div className='flex justify-center'>
                <h2 className=" text-3xl  px-8 py-3  align-middle justify-center items-center h2 -extrabold mb-3 mt-4"> En Uygun Oranlar: </h2>
            </div>

{/*Oranlar */}
            <div className="flex">
                <div className="w-1/6 bg-white-500 h-12"></div>

                <div className="w-4/6 h-12">
                    <div className="flex">
        {/*first */}    <div className="w-1/4 px-2">                                          
                            <div class="shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500">                                
                                <div className="bg-white-400 h-20 rounded-2xl ">                                    
                                    <div className="grid grid-cols-3 place-content-stretch">  {/* kredi ikonu  */}                                 
                                        <div className=" flex flex-col h-20 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mx-auto my-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                        </div>
                                        <div className=" flex flex-col h-20"> {/*kredi çeşidi yazısı  */}
                                            <div className='flex flex-col'>
                                                <p class="mx-0 my-auto  text-center break-normal text-xl font-medium text-black"> İhtiyac Kredisi</p>
                                                <p class="text-bold text-center text-slate-500">%0.60</p>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col h-20">  {/*ok ikonu */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>

        {/*second */}   <div className="w-1/4 px-2">
                            <div class="shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl">

                                    <div className="grid grid-cols-3 place-content-stretch"> {/* kredi ikonu  */}                                   
                                        <div className=" flex flex-col h-20 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>

                                        </div>
                                        <div className=" flex flex-col h-20"> {/*kredi çeşidi yazısı  */} 
                                            <div className='flex flex-col'>
                                                <p class="mx-0 my-auto text-center break-normal text-xl font-medium text-black"> Konut Kredisi</p>
                                                <p class="text-bold text-center text-slate-500">%0.60</p>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col h-20">  {/*ok ikonu */} 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>

        {/*third */}    <div className="w-1/4 px-2">
                            <div class=" shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl">
                                    <div className="grid grid-cols-3 place-content-stretch"> {/* kredi ikonu  */}                                   
                                        <div className=" flex flex-col h-20 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        </div>
                                        <div className=" flex flex-col h-20"> {/*kredi çeşidi yazısı  */} 
                                            <div className='flex flex-col'>
                                                <p class="mx-0 my-auto text-center break-normal text-xl font-medium text-black"> Taşıt Kredisi</p>
                                                <p class="text-bold text-center text-slate-500">%0.60</p>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col h-20">  {/*ok ikonu */} 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>

        {/*fourth */}   <div className="w-1/4 px-2">
                            <div class=" shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl">
                                    <div className="grid grid-cols-3 place-content-stretch"> {/* kredi ikonu  */}                                   
                                        <div className=" flex flex-col h-20 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mx-auto my-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                        </div>
                                        <div className=" flex flex-col h-20"> {/*kredi çeşidi yazısı  */} 
                                            <div className='flex flex-col'>
                                                <p class="mx-0 my-auto  text-center break-normal text-xl font-medium text-black"> İhtiyac Kredisi</p>
                                                <p class="text-bold text-center text-slate-500">%0.60</p>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col h-20">  {/*ok ikonu */} 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-1/6 bg-white-500 h-12"></div>
            </div>
                       
        </section>
    );
}

export default FeaturesHome;