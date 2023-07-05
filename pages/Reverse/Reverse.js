import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Reversetext } from '@/Components/Json/Reversetext'
import Textarea from '../Textarea/Textarea'
import Header from '@/Components/Header/Header'


const Reverse = () => {
    return (
        <div>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#420075]'>Backwards Text Generator</h1>
                        <p className='text-sm font-normal'>Normal front facing text to backwards text. A simple online backward text generator tool that allows you to switch the way your text is facing. Simply write or paste the text in the left column and see it get converted in the right..</p>
                    </div>
                    <div className='h-[98px]'></div>
                    <Textarea />
                    <div className='flex items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {Reversetext.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[15px] font-bold mb-[10px]  text-[#420075]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                    <p className='text-sm mb-[10px]'>{data.text}</p>
                                    <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                    <p className='text-sm mb-[10px]'>{data.data}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reverse