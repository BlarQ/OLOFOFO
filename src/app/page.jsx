import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://news-api-next-js-kappa.vercel.app/api/news')
  const news = await response.json()
  
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Banner />

      <div className='my-12'>
        <h2 className='mb-8 text-2xl font-bold'>Latest News</h2>
        
        <div className='grid justify-between grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {
            news.slice(0, 3).map((item) => (
              <NewsCard key={item._id} item={item} />
            ))
          }
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}