import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_NAME } from '../brand'
import { MdDeliveryDining } from 'react-icons/md'
import { BiRestaurant } from 'react-icons/bi'
import { IoGiftOutline } from 'react-icons/io5'
import { MdLocalOffer } from 'react-icons/md'
import { HiOutlineSparkles } from 'react-icons/hi'
import { AiOutlineShop } from 'react-icons/ai'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-white overflow-x-hidden'>
      {/* Section 1: Hero */}
      <div className='w-full h-screen bg-gradient-to-br from-slate-100 via-violet-50 to-cyan-50 flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='absolute inset-0 opacity-25'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-fuchsia-300 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl'></div>
        </div>

        <div className='relative z-10 text-center max-w-2xl px-6'>
          <h1 className='text-6xl md:text-7xl font-black gradient-text mb-4 tracking-tight'>{APP_NAME}</h1>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-800 mb-4'>
            Neighbourhood kitchens, one tap away
          </h2>
          <p className='text-xl text-slate-600 mb-8'>
            Order from local spots and track every minute until it reaches your door.
          </p>

          <div className='flex gap-4 justify-center flex-wrap mb-12'>
            <button className='bg-violet-500 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition'>
              🍔 Order Now
            </button>
            <button 
              onClick={() => navigate('/signin')}
              className='border-2 border-violet-600 text-fuchsia-600 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition'
            >
              Sign In
            </button>
          </div>

          <p className='text-gray-500'>Available on iOS & Android</p>
        </div>
      </div>

      {/* Section 2: Stats & Mission */}
      <div className='w-full py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold text-center mb-4 text-slate-800'>
            Built for small cities & busy evenings
          </h2>
          <p className='text-center text-slate-600 text-lg mb-16'>
            {APP_NAME} connects diners, kitchens, and riders on one simple map-first experience.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-5xl font-bold text-fuchsia-600 mb-2'>5,00,000+</div>
              <div className='text-gray-600 text-lg'>restaurants</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-fuchsia-600 mb-2'>800+</div>
              <div className='text-gray-600 text-lg'>cities</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-fuchsia-600 mb-2'>5 billion+</div>
              <div className='text-gray-600 text-lg'>orders delivered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Features */}
      <div className='w-full py-20 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold text-center mb-16 text-slate-800'>
            What you get with {APP_NAME}
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>🥗</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Healthy Choices</h3>
              <p className='text-gray-600 text-sm'>Fresh, nutritious meals</p>
            </div>

            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>⚡</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Super Fast Delivery</h3>
              <p className='text-gray-600 text-sm'>30 mins or less</p>
            </div>

            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>🎁</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Amazing Offers</h3>
              <p className='text-gray-600 text-sm'>Daily discounts & deals</p>
            </div>

            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>👨‍🍳</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Gourmet Quality</h3>
              <p className='text-gray-600 text-sm'>Premium restaurants</p>
            </div>

            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>📱</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Easy Ordering</h3>
              <p className='text-gray-600 text-sm'>Simple & secure checkout</p>
            </div>

            <div className='bg-white p-8 rounded-2xl text-center hover:shadow-xl transition'>
              <div className='text-6xl mb-4 flex justify-center'>⭐</div>
              <h3 className='font-semibold text-gray-800 mb-2'>Rated & Reviewed</h3>
              <p className='text-gray-600 text-sm'>Trusted by millions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Premium Membership */}
      <div className='w-full py-20 px-6 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold text-center mb-4 text-white'>
            {APP_NAME} Plus
          </h2>
          <p className='text-center text-white/95 text-lg mb-12'>
            Lower delivery fees and priority support for regular orderers
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl text-white'>
              <h3 className='text-3xl font-bold mb-4'>🎯 Best Discounts</h3>
              <p className='text-lg mb-4'>Exclusive member-only offers on your favorite restaurants</p>
              <button className='bg-white text-violet-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition'>
                Learn More
              </button>
            </div>

            <div className='bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl text-white'>
              <h3 className='text-3xl font-bold mb-4'>🚀 Free Delivery</h3>
              <p className='text-lg mb-4'>Unlimited free delivery on all orders across restaurants</p>
              <button className='bg-white text-violet-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Ecosystem */}
      <div className='w-full py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl font-bold text-center mb-16 text-slate-800'>
            Around {APP_NAME}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='bg-gradient-to-br from-slate-100 to-violet-200 p-8 rounded-2xl text-center'>
              <div className='text-6xl mb-4'>🍽️</div>
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>Eats</h3>
              <p className='text-slate-700'>Browse menus & reorder fast</p>
            </div>

            <div className='bg-gradient-to-br from-cyan-100 to-sky-200 p-8 rounded-2xl text-center'>
              <div className='text-6xl mb-4'>🏪</div>
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>Local picks</h3>
              <p className='text-slate-700'>Spotlight on nearby kitchens</p>
            </div>

            <div className='bg-gradient-to-br from-fuchsia-100 to-violet-200 p-8 rounded-2xl text-center'>
              <div className='text-6xl mb-4'>🎉</div>
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>Offers</h3>
              <p className='text-slate-700'>Flash deals & combo nights</p>
            </div>

            <div className='bg-gradient-to-br from-emerald-100 to-teal-200 p-8 rounded-2xl text-center'>
              <div className='text-6xl mb-4'>🌿</div>
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>Fresh lane</h3>
              <p className='text-slate-700'>Groceries & daily staples</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Download App */}
      <div className='w-full py-20 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-5xl font-bold text-gray-800 mb-6'>
                Download the app now!
              </h2>
              <p className='text-xl text-slate-600 mb-8'>
                Get live order status and rider map inside the {APP_NAME} app.
              </p>

              <div className='space-y-4 mb-8'>
                <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2'>
                  🍎 Download on App Store
                </button>
                <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2'>
                  🤖 Get it on Google Play
                </button>
              </div>

              <button 
                onClick={() => navigate('/signin')}
                className='w-full border-2 border-violet-600 text-fuchsia-600 py-3 rounded-lg font-semibold hover:bg-violet-50 transition'
              >
                Continue on Web
              </button>
            </div>

            <div className='flex justify-center'>
              <div className='bg-white p-8 rounded-2xl shadow-xl'>
                <div className='bg-gray-200 aspect-square rounded-xl flex items-center justify-center mb-4'>
                  <div className='text-8xl'>📱</div>
                </div>
                <p className='text-center text-gray-600 font-semibold'>Scan QR code to download</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='w-full bg-black text-white py-12 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-8 mb-8'>
            <div>
              <h3 className='font-bold mb-4'>{APP_NAME}</h3>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li><a href='#' className='hover:text-white'>About us</a></li>
                <li><a href='#' className='hover:text-white'>Careers</a></li>
                <li><a href='#' className='hover:text-white'>Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>For Restaurants</h3>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li><a href='#' className='hover:text-white'>Partner With Us</a></li>
                <li><a href='#' className='hover:text-white'>Apps For You</a></li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Learn More</h3>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li><a href='#' className='hover:text-white'>Privacy</a></li>
                <li><a href='#' className='hover:text-white'>Security</a></li>
                <li><a href='#' className='hover:text-white'>Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Social Links</h3>
              <div className='flex gap-4 text-xl'>
                <a href='#' className='hover:text-violet-600'>f</a>
                <a href='#' className='hover:text-violet-600'>𝕏</a>
                <a href='#' className='hover:text-violet-600'>📷</a>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-700 pt-8 text-center text-gray-400'>
            <p>&copy; 2026 {APP_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
