"use client";

import { CiShuffle } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import somokuto from '../public/somokuto.json';

export default function Home() {
  const shuffle = () =>{
    somokuto.sort(() => Math.random() - 0.5);
    // somokutoの内容を変更したので再レンダリング
    // #haikuを再レンダリング
    const haiku = document.querySelector('.haiku');
    if(!haiku) return;
    haiku.innerHTML = '';
    somokuto.map((line, index) => {
      const p = document.createElement('p');
      p.textContent = line;
      p.className = "scroll-snap-item h-dvh text-center text-white text-md tracking-[7px]";
      p.style.writingMode = "vertical-rl";
      p.style.scrollSnapAlign = "start";
      haiku.appendChild(p);
    });
  }
  
  return (
    <main className="flex min-h-dvh cursor-default">
      <div className='fixed w-full h-full py-0 sm:py-24 -z-50'>
        <img src={"mountain.jpg"} alt="background" className="w-full h-full object-cover sm:object-contain" />
      </div>
      <div className="h-full fixed top-0 pt-12 pb-6 right-6 text-white sm:text-black tracking-[12px]">
        <div className="flex flex-col h-full justify-between items-center">
          <h1 className="text-xs" style={{writingMode:"vertical-rl"}}>種田山頭火 草木塔</h1>
          <div className="flex flex-col items-center">
            <button onClick={shuffle} className="flex items-center justify-center w-12 h-12 text-white sm:text-black rounded-full">
              <CiShuffle className="text-xl" />
            </button>
            <a href="https://github.com/menma275/somokuto" target="_blank">
              <FaGithub className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
      {/* jsonファイルから1行ずつ読み込んで表示 */}
      <div className="flex flex-col items-center justify-center w-full p-4 gap-96 haiku">
        {somokuto.map((line, index) => (
          <p key={index} className="scroll-snap-item h-dvh text-center text-white text-md tracking-[7px]"  style={{writingMode:"vertical-rl"}}>{line}</p>
        ))}
      </div>
    </main>
  );
}
