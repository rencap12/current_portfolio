import './App.css'
import ProjectCard  from './components/projectCard'
import IntroBio from './components/IntroBio';
import OOPData from './OOPData.json'
import WebDevData from './WebDev.json'

function App() {

  return (
    <>
    <IntroBio />

    <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap px-4 md:px-20 py-8">
      <h1 className="text-4xl font-bold text-primary whitespace-nowrap">OOP Projects</h1>
      
      <div className="carousel w-full max-w-[700px]">
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


    <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap px-4 md:px-20 py-8">
        <h1 className="text-4xl font-bold text-primary whitespace-nowrap">Full-Stack Projects</h1>
        
        <div className="carousel w-full max-w-[700px]">
          {WebDevData.map((card, index) => {
            const id = `wd-slide${index + 1}`;
            const prevId = `wd-slide${(index - 1 + WebDevData.length) % WebDevData.length + 1}`;
            const nextId = `wd-slide${(index + 1) % WebDevData.length + 1}`;
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

    </>
  );
}

export default App
