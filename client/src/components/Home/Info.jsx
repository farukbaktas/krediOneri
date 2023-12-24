import React from 'react'

const Info = () => {
  return (
    <section>
      {/* info kutucuğu*/}
      <div className='flex flex-col'>
        <div className='my-auto mx-36 py-12 px-2'>
          <div className='shadow-indigo-500/50 shadow-md border rounded-2xl border-purple-500'>
            <div className='bg-white-50 h-60 rounded-2xl'>              
              <div className='flex'>
                {/* sol info*/}
                <div className='w-1/2 px-1'>
                  <div className='flex flex-col items-center justify-center h-60'>
                    
                    <div class="grid grid-rows-4 grid-flow-col">                                        
                      <div>01</div>
                      <div>01</div>
                      <div>01</div>
                      <div>01</div>
                    </div>                                      
                  </div>
                </div>
                
                {/* sağ info*/}
                <div className='w-1/2 px-1'>
                  <div className='flex flex-col items-center justify-center h-60'>
                    <div class="grid grid-rows-4 grid-flow-col">                                        
                      <div>01</div>
                      <div>01</div>
                      <div>01</div>
                      <div>01</div>
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