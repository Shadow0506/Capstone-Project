import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center p-16'>
      <h1 className='text-4xl text-white underline p-5'>Welcome!</h1>
      <p className='text-white text-2xl text-center'>Welcome to our automated website in the modern era of artificial intelligence. We are excited to introduce a revolutionary way of managing your orders with the help of our AI Assistant, Kevin. Unlike traditional websites, we do not have separate pages for checking your past orders or tracking current orders. Instead, Kevin is here to assist you with any information you might need regarding your orders. Whether you want to know the status of an ongoing delivery or need details about previous purchases, Kevin will provide you with instant and accurate information. This streamlined approach not only simplifies your experience but also leverages the power of AI to make your interactions more efficient and personalized. Explore the future of customer service with our AI-driven platform, where Kevin is always ready to help you with your queries. Welcome to a new era of automated, intelligent, and user-friendly order management!</p>
      <Link to='/shop' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700 shadow-lg  m-16 py-2 px-4'>Go Straight to Shopping</Link>
    </div>
  )
}

export default Home
