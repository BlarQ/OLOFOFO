import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const NewsCard = ({item}) => {
  return (
    <div className='p-5 border rounded-md shadow-md'>
        <Link href={`/news/${item._id}`}>
            <Image src={item?.imageUrl}  alt={item?.title}
            width={500}
            height={500}
            className='mb-5 transition-all duration-300 rounded cursor-pointer md:h-56 hover:scale-105'
            />
            
        </Link>

        <div>
            <h2 className='my-3 text-xl font-semibold'>{item?.title.substring(0, 65)}...</h2>
            <p className='mb-4'>{item?.description.substring(0, 85)}...</p>
            <Link href={`/news/${item._id}`}>
                <Button>Read More</Button>
            </Link>
        </div>
    </div>
  )
}

export default NewsCard