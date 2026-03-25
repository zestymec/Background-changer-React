import { useState } from 'react';
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap bg-amber-50 rounded-full gap-1 py-2 px-4 max-w-max shadow-lg'>
        <button className='px-4 py-1 bg-black text-white hover:bg-gray-800 rounded-full' onClick={()=> setcolor('black')}>black</button>
        <button className='px-4 py-1 bg-red-600 text-white hover:bg-red-700 rounded-full'  onClick={()=> setcolor('red')}>Red</button>
        <button className='px-4 py-1 bg-yellow-500 text-black hover:bg-yellow-600 rounded-full'  onClick={()=> setcolor('yellow')}>Yellow</button>
        <button className='px-4 py-1 bg-green-600 text-white hover:bg-green-700 rounded-full'  onClick={()=> setcolor('green')}>Green</button>
        <button className='px-4 py-1 bg-pink-500 text-white hover:bg-pink-600 rounded-full'  onClick={()=> setcolor('pink')}>Pink</button>
        <button className='px-4 py-1 bg-amber-800 text-white hover:bg-amber-900 rounded-full'  onClick={()=> setcolor('brown')}>Brown</button>
        <button className='px-4 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-full'  onClick={()=> setcolor('blue')}>Blue</button>
      </div>
    </div>
  )
}

export default App
