'use client'

import { fetchNews } from '@/lib/fetchNews'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import NewsCard from '../NewsCard'

const NewsList = () => {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const getnews = async () => {
      const data = await fetchNews(category, search)
      setNews(data);
    }

    getnews()
  }, [category, search])

  console.log(news)

  return (
    <div>
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:items-center md:gap-12'>
        {/* Search Bar */}
        <SearchBar onSearch={setSearch} />

        {/* category filter */}
        <CategoryFilter onCategoryChange={setCategory} />
      </div>

      {/* present news */}
      <div>
        {
          news.map((item) => (
            <NewsCard key={item?._id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default NewsList