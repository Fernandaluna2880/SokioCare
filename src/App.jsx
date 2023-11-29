import React from 'react'
import Sokio from './components/organims/Sokio'
import CardStore from './components/molecules/CardStore'
import OrganicSection from './components/organims/OrganicSection'
import SokioCare from './components/organims/SokioCare'

function App() {
  return (
    <div>
      <SokioCare/>
      <Sokio/>
      <OrganicSection/>
    </div>
  )
}

export default App
