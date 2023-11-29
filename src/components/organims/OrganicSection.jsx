import React from 'react'
import CardStore from '../molecules/CardStore'
import crema1 from '../../assets/image/crema1.jpeg'
import crema2 from '../../assets/image/crema2.jpeg'
import crema3 from '../../assets/image/crema3.jpeg'
import Titulo from '../atoms/Titulo.jsx'

function OrganicSection() {
  return (
    <>
        <section className='  bg-[#19280a]'>
            <Titulo text="Los mejores para la piel." />
            <div className=' wrapper grid grid-cols-1 gap-10 md:grid-cols-3 py-5'>
                <CardStore image={crema1}/>
                <CardStore image={crema2}/>
                <CardStore image={crema3}/>
            </div>
        </section>
    </>
  )
}

export default OrganicSection