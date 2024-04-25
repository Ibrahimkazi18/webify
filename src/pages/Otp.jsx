import React from 'react'
import Section from '../components/Section'
import OtpInput from '../components/OtpInput'
import Heading from '../components/Heading'
import TagLine from '../components/TagLine'

const Otp = () => {
  return (
    <Section crosses crossesOffset>
        <div className='container h-screen flex flex-col justify-center items-center space-y-6 relative'>
            <div className='md:w-60 md:h-44 w-32 h-44 rounded-full bg-gradient-to-tr from-purple-900 to-pink-900 animate-bounce absolute'/>
            <div className='w-full h-screen bg-n-7/10 backdrop-blur-xl absolute bottom-0 rounded-3xl z-1' />
                <div className='z-20 flex justify-center space-y-3 items-center flex-col'>
                    <Heading title={"OTP Verification"} className={`z-20`} />
                    <TagLine>
                        Check your inbox for the OTP from webify.go.online@gmail.com and enter it below.
                    </TagLine>
                </div>
                <div className='z-20 space-x-4'>

                    <form action="" method="post">
                        <div className='flex gap-4 items-center mb-3'>
                            <label htmlFor="email" className='text-lg font-medium'>
                                Email
                            </label>
                            <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder='Enter your email'
                                className='w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent'/>
                        </div>
                        
                        <OtpInput count={6} />
                    </form>
                </div>
        </div>
    </Section>
  )
}

export default Otp