import React from 'react';

function FeaturesHome() {

    return (
        <section>
            <div className='flex flex-col justify-center items-center max-w-6xl mx-auto bg-white'>
                <div className='text-center'>
                    <h1 className='font-extrabold text-6xl leading-tighter tracking-tighter text-black text-center  '>Make your website <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800'>wonderful</span></h1>
                    <p className='mx-auto max-w-3xl text-xl mt-[30px]'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                </div>
                <div className='flex space-x-16 mt-8'>
                    <button>
                        <div className='text-white px-8 py-4 rounded-2xl bg-purple-700 hover:text-white hover:px-[40px] hover:py-[20px] ease-in-out duration-700'>
                            Lets Start!
                        </div>
                    </button>
                    <button>
                        <div className='text-white px-8 py-4 rounded-2xl bg-purple-700 hover:text-white hover:px-[40px] hover:py-[20px] ease-in-out duration-700'>
                            Learn More!
                        </div>
                    </button>
                </div>
                <div className='flex flex-col item-center justify-center'>
                    <img className='w-[750px] mt-12' src="https://cdn.discordapp.com/attachments/1141678211768533094/1183038061479735357/Screenshot_2023-12-09_at_16.21.26.png?ex=6586e10d&is=65746c0d&hm=21e7074cad61a07a19b91b4377e8d56129b329bf83f2e0d34d1e107f8717d41c&" alt="" />
                    <div className='absolute flex justify-center item-center'>
                        <button>
                            <div className='flex group item-center justify-center my-auto space-x-4 text-white px-6 py-4 rounded-2xl bg-purple-700 hover:text-white hover:px-[40px] hover:py-[20px] ease-in-out duration-700'>

                                <div className='w-8 hover:text-black text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>
                                </div>
                                <span className='my-auto'>
                                Watch the full video (2min)
                                </span>
                            </div>
                        </button>
                </div>
                </div>

            </div>
        </section>
    );
}

export default FeaturesHome;