"use client";
import Image from 'next/image'
import Link from 'next/link'
import "./main.css";
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Home() {

  const [visible1, setVisible1] = useState(false)

  useEffect(() => {
    const target1 = document.querySelector("#div1");
    console.log(`target1 : ${target1}`)
    console.log(`target not found`)
    if (target1 == null) return;
    console.log(`target found`)
    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideRight");
          entry.target.classList.remove("hidden2");
        } else {
          entry.target.classList.remove("slideRight");
          entry.target.classList.add("hidden2");
        }
      })
    }
    const observer = new IntersectionObserver(callback)

    observer.observe(target1);

    return () => {
      observer.unobserve(target1);
    }
  }, [])


  return (
    <main className='mx-10 my-8'>
      <div className='flex flex-row justify-between items-center'>
        <div className='font-bold flex flex-col items-center justify-center gap-y-5'>
          <div className='text-5xl flex flex-row items-center gap-x-3 font-bold'>
            <p>LEARN TO CODE</p>
            <p className=' text-[#F48811] text-5xl'>FASTER.</p>
          </div>
          <div className='flex flex-row items-center gap-x-2'>
            <p className='inline text-2xl'>Fireship is a </p>
            <p className='text-yellow-500 inline text-2xl'>blazingly fast</p>&&
            <p className='text-pink-600 inline text-2xl' id='3'>highly-amusing way</p>
            <p className='inline text-2xl'>to level up your programming skills.</p>
          </div>
          <button className='btn btn-accent'>START HERE</button>
        </div>
        <Image src='/coding.gif' width={400} height={400} priority
          alt="A boy coding" className='rounded-md border border-transparent overflow-hidden' />
      </div>
      <div className='flex flex-col items-center gap-y-40 justify-center'>
        <Link href="#truth" className="no-underline">
          <h2 className="bg-red-500 inline-block text-gray-900 font-bold px-6 py-4 text-6xl shadow-xl prose">Hard Truth</h2>
        </Link>
        <span className="animate-bounce text-5xl block">
          👇
        </span>
      </div>
      <div className='mt-10 w-full h-48' id="#div1">
        <p className='text-5xl text-gray3 px-4 text-center'>
          You <span className='animate-pulse text-red-600 font-bold'>can&apos;t</span> learn to code by watching videos
        </p>
        <p className='mt-10 animate-bounce text-3xl block text-center'>I&apos;m Sad 😥</p>
      </div>
      <div className='flex flex-col items-center gap-y-40 justify-center'>
        <Link href="#truth" className="no-underline">
          <h2 className="bg-green-500 inline-block text-gray-900 font-bold px-6 py-4 text-6xl shadow-xl prose">Solution</h2>
        </Link>
        <span className="animate-bounce text-5xl block">
          👇
        </span>
      </div>
      <div className='mt-10 w-full h-48' id="#div1">
        <p className='text-5xl text-gray3 px-4 text-center'>
          Fireship is all about <span className='animate-pulse text-green-600 font-bold'> project-based </span>learning. I create short highly-focused videos that make learning to code addicting.
        </p>
        <p className='mt-10 animate-bounce text-3xl block text-center'>But like how 🤔?</p>
      </div>
      <div className='flex flex-col items-center gap-y-40 justify-center'>
        <Link href="#truth" className="no-underline">
          <h2 className="bg-purple-500 inline-block text-gray-900 font-bold px-6 py-4 text-6xl shadow-xl prose">Have Fun</h2>
        </Link>
        <span className="animate-bounce text-5xl block">
          👇
        </span>
      </div>
      <div className='mt-10 w-full h-48' id="#div1">
        <p className='text-5xl text-gray3 px-4 text-center'>
          I built this one-of-a-kind learning platform to give you <span className='animate-pulse text-violet-600 font-bold'> dopamine </span>hits like XP and meme prizes for every little accomplishment
        </p>
        <p className='mt-10 animate-bounce text-3xl block text-center'>login now to start earning useless XP points 💎</p>
      </div>
      <div className='flex flex-col items-center gap-y-40 justify-center'>
        <Link href="#truth" className="no-underline">
          <h2 className="bg-yellow-500 inline-block text-gray-900 font-bold px-6 py-4 text-6xl shadow-xl prose">Let Go</h2>
        </Link>
        <span className="animate-bounce text-5xl block">
          👇
        </span>
      </div>
      <div className='mt-10 w-full h-48' id="#div1">
        <p className='text-5xl text-gray3 px-4 text-center'>
          There&apos;s tons of free content here, so <span className='animate-pulse text-yellow-600 font-bold'> play </span>around before you upgrade
        </p>
        <Link href="/courses"> <p className='mt-10 animate-bounce text-3xl block text-center'>every course starts free, try it out 🚀</p></Link>
      </div>
    </main>
  )
}
