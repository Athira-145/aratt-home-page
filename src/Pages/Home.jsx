import React from 'react'
import Banner from '../Components/Home/Banner'
import Wrapper from '../../UI/layout/Wrapper'
import Container from '../../UI/layout/Container'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Slideshow from '../Components/SlideShow'

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Container>
            <div className="relative min-h-screen flex flex-col justify-between">
               {/* Header floating over slideshow */}
              <Header />
              {/* Slideshow section */}
              <section className='relative' >
                <Slideshow />
              </section>
              <Banner/>
                {/* Footer */}
            <Footer />
            </div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Home
