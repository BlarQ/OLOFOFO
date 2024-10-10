import NewsList from '@/components/news/newsList'
import React from 'react'

const Newspage = () => {
  return (
    <div className='py-12'>
        <h2 className='mb-8 text-2xl font-bold'>Latest News</h2>
        <NewsList />
    </div>
  )
}

export default Newspage