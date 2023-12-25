import React from 'react'

const Info = () => {
  return (
    <section>
      {/* info kutucuğu*/}
      <div className='flex flex-col'>
        <div className='my-auto mx-44 py-12 px-2'>
          <div className=' bg-slate-50 shadow-indigo-500/50 shadow-md border rounded-3xl border-purple-500'>
            <div className='h-40 rounded-3xl'>              
              <div className='flex'>
                {/* sol info*/}
                <div className='w-1/2'>
                  <div className='flex flex-col px-8 justify-center h-40'>                   
                    <div class="grid grid-rows-3 grid-flow-col">                                                              
                      <div className='flex flex-col items-right justify-center'>
                        <button type="button" class=" focus:outline-none text-black bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                      </div>
                      <div className='flex flex-col items-right justify-center'>
                        <button type="button" class="focus:outline-none text-white bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                      </div>                      
                      <div className='flex flex-col items-right justify-center'>
                        <button type="button" class="focus:outline-none text-white bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                      </div>
                    </div>                                      
                  </div>
                </div>
                
                {/* sağ info*/}
                <div className='w-1/2 px-1 '>
                  <div className='flex flex-col px-8  justify-center h-40'>
                    <div class="grid grid-rows-3 grid-flow-col">                                        
                      <div className='flex flex-col items-right justify-center'>
                          <button type="button" class=" focus:outline-none text-black bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                        </div>
                        <div className='flex flex-col items-right justify-center'>
                          <button type="button" class="focus:outline-none text-white bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                        </div>                      
                        <div className='flex flex-col items-right justify-center'>
                          <button type="button" class="focus:outline-none text-white bg-gray-200 hover:bg-amber-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-1 me-2 mb-2 dark:focus:ring-orange-600">What is Lorem Ipsum</button>
                        </div>
                      </div>                                    
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info