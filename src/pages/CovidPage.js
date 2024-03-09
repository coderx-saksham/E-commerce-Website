import React from 'react'
// import styled from 'styled-components'
import { PageHero } from '../components'
// import aboutImg from '../assets/covid.png'
import App from '../covid/App'

const CovidPage = () => {
    return (
        <main>
            <PageHero title="Covid-19-Tracker"/>
            <App/>
        </main>
    )
}

export default CovidPage
