import TestimonialImage from '../../assets/testimonial.jpg';
function Testimonials() {
    return (
        <section className=""> 
        {/* banner kutucuğu*/}
            <div className="flex flex-col">
                <div className="my-auto mx-44 py-28 px-2">                                          
                    <div class="shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500">
                       <div className="bg-white-50 h-56 rounded-2xl"> 
                            {/* banner ikonu*/}
                            <div className="flex">                               
                                <div className="w-1/6 px-2">                                    
                                    <div className="flex flex-col items-center justify-center h-56">                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-16 h-16">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                    </div>    
                                </div>
                             {/* banner orta yazısı */}
                                <div className="w-2/6 px-1">
                                    <div className="flex flex-col items-left justify-center h-56">
                                        <h2 class=" font-medium text-3xl align-middle h2 -extrabold"> Kredin onaylanmıyor mu? </h2>
                                    </div>
                                </div>
                             {/* banner sağ  yazısı*/}
                                <div className="w-3/6 py-8 px-8">
                                    <div className="flex flex-col items-center h-16">
                                        <p class="text-right font-medium text-lg align-middle"> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </p>
                                    </div>
                             {/* banner sağ alt butonu*/}    
                                    <div className='flex flex-col items-right justify-center h-16 my-8 ml-16 mr-0'>
                                        <button type="button" class="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">What is Lorem Ipsum</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>

            </div>
            
        </section>
    );
}

export default Testimonials;