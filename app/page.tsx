import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='font-bold flex flex-col items-center justify-center gap-y-5'>
        <div className='text-5xl flex flex-row items-center gap-x-3 font-bold'>
          <p>LEARN TO CODE</p>
          <p className=' text-orange-700 text-5xl'>FASTER.</p>
        </div>
        <div className='flex flex-row items-center gap-x-3'>
          <p className='inline text-2xl'>Fireship is a </p>
          <p className='text-yellow-500 inline text-2xl'>blazingly fast &&</p>
          <p className='text-pink-600 inline text-2xl' id='3'>highly-amusing way</p>
          <p className='inline text-2xl'>to level up your programming skills.</p>
        </div>
        <button className='btn btn-accent'>START HERE</button>
      </div>
    </main>
  )
}
