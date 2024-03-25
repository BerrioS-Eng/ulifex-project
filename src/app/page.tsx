import Image from 'next/image'
import React from 'react'
import guidelineAirplane from '@public/heroGuidelineAirplane.svg'
import heroImg from '@public/heroImg.svg'
import heroGuideline from '@public/heroGuideline.svg'
import heroBigImg from '@public/heroBigImg.svg'
import FormExperience from '@/components/ui/FormExperience'

const Home = () => {
  return (
    <main>
      <section>
        <Image
          alt='guideline-airplane'
          src={guidelineAirplane}
          className='w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] absolute pt-2 -z-10'
        />
        <div className='flex flex-col sm:flex-row md:gap-[5%] lg:gap-[5%] pt-14 lg:pt-0 items-center sm:items-start lg:items-center justify-center w-full'>
          <div>
            <p className='w-[280px] text-5xl lg:w-[450px] lg:text-7xl font-alfa font-bold tracking-wide z-10'>
              El <span className='text-[#FF6699]'>viaje</span> Hacia una nueva <span className='text-[#FFCC00]'>vida</span>.<br />
            </p>
            <p className='w-[280px] font-league text-xl'>Make your experience, <br />make your life</p>
              {/*Form Choose Experience*/}
            <FormExperience />
          </div>
          <div>
            <Image
              alt='hero image'
              src={heroImg}
              className='relative sm:static md:hidden -top-[120px] -z-20'
            />
            <Image
              alt='hero big image'
              src={heroBigImg}
              className='hidden md:static md:block lg:w-[500px] md:w-[400px] -z-20'
            />
            <Image
              alt='hero guideline'
              src={heroGuideline}
              className='w-[55%] right-0 hidden sm:block sm:-right-6 sm:absolute sm:top-96 md:w-[50%] md:right-0 lg:w-[40%] lg:top-[470px]'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home