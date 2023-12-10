import React from 'react';

function FeaturesHome() {

    return (
        <section>
{/* En uygun oranlar başlığı */}
            <div className='flex justify-center'>
                <h2 class="text-3xl  px-8 py-3  align-middle justify-center items-center h2 -extrabold mb-3 mt-4"> En Uygun Oranlar: </h2>
            </div>

{/*Oranlar */}
            <div className="flex">
                <div className="w-1/6 bg-white-500 h-12"></div>

                <div className="w-4/6 h-12">
                    <div className="flex">

        {/*first */}    <div className="w-1/4 px-2">
                            <div class="border rounded-2xl  border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div>

        {/*second */}   <div className="w-1/4 px-2">
                            <div class="border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div>

        {/*third */}    <div className="w-1/4 px-2">
                            <div class="border rounded-2xl border-purple-500">
                                <div className="bg-white-400 h-20 rounded-2xl"></div>
                            </div>
                        </div>

        {/*fourth */}   <div className="w-1/4 px-2">
                            <div class="border rounded-2xl border-purple-500">
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

            </div> */}

        </section>
    );
}

export default FeaturesHome;