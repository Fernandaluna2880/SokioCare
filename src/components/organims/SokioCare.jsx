import React from 'react'
import crema2 from '../../assets/image/crema2.jpeg'

function SokioCare() {
  return (
    <>
        <section className='grid gap-8 justify-items-center pb-12 items-center md:grid-cols-2 bg-[#19280a] '>
            <img src={crema2} alt="" className='  md:order-1' />

            <article className=' wrapper text-center space-y-6 md:text-left md:space-y-8'>
                <h2 className=' text-4xl font-bold text-[#d8f7d5] md:text-5xl'>Productos Organicos para el cuidado de la piel.</h2>
                <p className=''></p>
            </article>
        </section>
    </>
  )
}

export default SokioCare