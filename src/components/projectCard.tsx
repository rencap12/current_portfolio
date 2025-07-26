import React from "react";
import { useState, useRef } from "react";
import type { CardData } from "../types";

type Props = {
  cardInfo: CardData;
  id: string;
  prevId: string;
  nextId: string;
};

const ProjectCard = ({ cardInfo, id, prevId, nextId }: Props) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={cardInfo.image.src} alt={cardInfo.image.alt} className="w-full object-cover h-80" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#${prevId}`} className="btn btn-circle">❮</a>
        <a href={`#${nextId}`} className="btn btn-circle">❯</a>
      </div>
      <div className="absolute bottom-5 left-5 text-white bg-black/50 px-4 py-2 rounded">
        <h2 className="text-xl font-bold">{cardInfo.title}</h2>
        <a href={cardInfo.url} className="underline text-sm" target="_blank"
              rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
