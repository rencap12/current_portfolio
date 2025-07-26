import { useState } from 'react'
import './App.css'
import ProjectCard  from './components/projectCard'
import IntroBio from './components/IntroBio';
import type { CardData } from "./types";
import OOPData from './OOPData.json'
import WebDevData from './WebDev.json'

function App() {

  return (
    <>
    <IntroBio />

    
    <div className="max-w-[700px] mx-auto mt-10 flex justify-center py-8">
      <h1>OOP Projects</h1>
      <div className="carousel w-full">
        {OOPData.map((card, index) => {
          const id = `oop-slide${index + 1}`;
          const prevId = `oop-slide${(index - 1 + OOPData.length) % OOPData.length + 1}`;
          const nextId = `oop-slide${(index + 1) % OOPData.length + 1}`;
          return (
            <ProjectCard
              key={index}
              id={id}
              prevId={prevId}
              nextId={nextId}
              cardInfo={card}
            />
          );
        })}
      </div>
    </div>


    <div className="max-w-[700px] mx-auto mt-10 flex justify-center py-8">
      <h1>Full-Stack Projects</h1>
      <div className="carousel w-full">
        {WebDevData.map((WDcard, WDindex) => {
          const WDid = `wd-slide${WDindex + 1}`;
          const WDprevId = `wd-slide${(WDindex - 1 + WebDevData.length) % WebDevData.length + 1}`;
          const WDnextId = `wd-slide${(WDindex + 1) % WebDevData.length + 1}`;
          return (
            <ProjectCard
              key={WDindex}
              id={WDid}
              prevId={WDprevId}
              nextId={WDnextId}
              cardInfo={WDcard}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}

export default App
