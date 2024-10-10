import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const NewsLetter = () => {
  return (
    <section className="py-12 text-white bg-gray-800 rounded dark:bg-gray-800 dark:text-white">
      <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">
          Stay Updated
        </h2>
        <p className="mt-4 text-lg">
          Subscribe to our newsletter and get the latest updates directly in
          your inbox.
        </p>

        {/* Subscription Form */}
        <form className="mx-auto mt-8 sm:max-w-sm sm:flex sm:justify-center">
          <div className="flex-1 sm:flex-shrink-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <Button className="w-full sm:w-auto dark:bg-primary dark:hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter