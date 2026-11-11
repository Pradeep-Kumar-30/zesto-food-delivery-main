import React from 'react'

function CategoryCard({name,image,onClick}) {
  return (
    <div className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-3xl border-2 border-violet-300 shrink-0 overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative hover:border-violet-500' onClick={onClick}>
     <img src={image} alt="" className=' w-full h-full object-cover transform hover:scale-125 transition-transform duration-300'/>
     <div className='absolute bottom-0 w-full left-0 bg-gradient-to-t from-black via-black/70 to-transparent px-3 py-3 rounded-t-2xl text-center shadow-lg text-sm font-bold text-white'>
{name}
     </div>
    </div>
  )
}

export default CategoryCard
