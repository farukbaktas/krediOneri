import React from 'react';

function FeaturesHome() {

    return (
        <section>
{/* En uygun oranlar başlığı */}
            <div className='flex justify-center'>
                <h2 class=" text-3xl  px-8 py-3  align-middle justify-center items-center h2 -extrabold mb-3 mt-4"> En Uygun Oranlar: </h2>
            </div>

{/*Oranlar */}
            <div className="flex">
                <div className="w-1/6 bg-white-500 h-12"></div>

                <div className="w-4/6 h-12">
                    <div className="flex">
                        <div className="w-1/4 px-2"> {/*first */}
                            <div class=" shadow-md border rounded-2xl  border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl ">
                                    
                                    <div className="grid grid-cols-3 place-content-stretch">                                   
                                        <div className=" flex flex-col h-20 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" mx-auto my-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                        </div>
                                        <div className=" flex flex-col h-20">
                                            <div class="mx-0 my-auto break-normal text-xl font-medium text-black">İhtiyac Kredisi</div>
                                            <p class="text-bold text-slate-500">%0.60</p>
                                        </div>

                                        <div className=" flex flex-col h-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" justify-center item-center my-auto mx-auto w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>

        {/*second */}   <div className="w-1/4 px-2">
                            <div class=" shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div>

        {/*third */}    <div className="w-1/4 px-2">
                            <div class=" shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div>

        {/*fourth */}   <div className="w-1/4 px-2">
                            <div class=" shadow-md border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div> 
                                          
                    </div>
                </div>

                <div className="w-1/6 bg-white-500 h-12"></div>
            </div>

{/*
            <div className='flex flex-col justify-center items-center max-w-6xl mx-auto bg-white'>
                <div className='flex space-x-16 mt-8'>
                    <button>
                        <div className='text-white px-8 py-4 rounded-2xl bg-purple-700 hover:text-white hover:px-[40px] hover:py-[20px] ease-in-out duration-700'>
                            Lets Start!
                        </div>
                    </button>      
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <img className='w-[750px] mt-12' src="https://cdn.discordapp.com/attachments/1141678211768533094/1183038061479735357/Screenshot_2023-12-09_at_16.21.26.png?ex=6586e10d&is=65746c0d&hm=21e7074cad61a07a19b91b4377e8d56129b329bf83f2e0d34d1e107f8717d41c&" alt="" />
                    <div className='absolute flex justify-center item-center'>
                </div>
                </div>

                                        </div>
                                                    <div class=" flex-col w-32 h-20">
                                            <div class=" flex flex-col bg-gray-200">
                                                <div class="text-lg text-center m-2">
                                                    <h2>İhtiyac kredisi</h2> 
                                                </div>
                                                
                                                <div class="font-bold text-xl text-center m-1">
                                                    <h2>% 0.60</h2>
                                                </div>
                                            </div>
                                        </div> */}

        </section>
    );
}

export default FeaturesHome;