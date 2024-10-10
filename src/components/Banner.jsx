import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

import bannerImg from "@/assets/banner.jpg"

const Banner = () => {
    return (
        <section className='py-8 bg-gray-100'>
            <div className='grid items-center grid-cols-1 gap-8 px-4 py-5 mx-auto lg:grid-cols-2 max-w-7xl sm:px-6 lg:px-8'>
                <div className='w-full'>
                    <Image
                        src={bannerImg}
                        alt='Banner Image'
                        placeholder='blur'
                        className='object-cover w-full h-auto rounded-md' />
                </div>


                {/* content */}
                <div className='flex flex-col space-y-4'>
                    <h3 className='text-sm font-medium text-gray-500'>Technology</h3>
                    <h2 className='text-3xl font-bold text-gray-900'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corporis doloribus labore accusamus dolorum, unde blanditiis suscipit.
                        <br /><br />
                        Omnis quod ipsam fugit obcaecati quia nemo, exercitationem, dolorem tempora minima! Sed, veritatis.
                    </p>

                    <Button variant="default">Read More</Button>

                </div>
            </div>
        </section>
    )
}

export default Banner