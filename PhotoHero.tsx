'use client';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Camera, Music2, Video } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './carousel';
import { Button } from './button';
import { content } from './content';
const photos = [
 {id:'1231',alt:'Valen sonríe junto a su banda en la live session',position:'48% 43%'},
 {id:'0972',alt:'Valen canta con el saxofón entre flores',position:'50% 36%'},
 {id:'0967',alt:'Valen toca el saxofón bajo la luz cálida del escenario',position:'50% 34%'},
 {id:'0820',alt:'Valen y su banda comparten una canción en vivo',position:'68% 47%'},
];
export function PhotoHero(){
 const [api,setApi]=useState<CarouselApi>(); const [selected,setSelected]=useState(0);
 useEffect(()=>{if(!api)return; const update=()=>setSelected(api.selectedScrollSnap()); update();api.on('select',update);return ()=>{api.off('select',update)}},[api]);
 return <section id="inicio" className="photo-hero" aria-label="Valen Espitia en vivo">
  <Carousel opts={{loop:true}} setApi={setApi} className="photo-carousel" aria-label="Fotografías de Valen en vivo">
   <CarouselContent className="photo-track">{photos.map((photo,i)=><CarouselItem className="photo-slide" key={photo.id} aria-label={`Foto ${i+1} de 4`}><picture><source media="(max-width: 600px)" srcSet={`${import.meta.env.BASE_URL}live-${photo.id}-mobile.webp`}/><img src={`${import.meta.env.BASE_URL}live-${photo.id}.webp`} alt={photo.alt} style={{objectPosition:photo.position}} loading={i===0?'eager':'lazy'} fetchPriority={i===0?'high':'auto'} width={photo.id==='0820'||photo.id==='1231'?2560:1707} height={photo.id==='0820'||photo.id==='1231'?1709:2560}/></picture></CarouselItem>)}</CarouselContent>
   <div className="photo-shade"/>
   <header className="photo-header"><nav aria-label="Principal"><a href="#musica">Música</a><a href="#universo">Universo</a></nav><a className="photo-logo" href="#inicio">valen espitia<span>MÚSICA PA’ SENTIR</span></a><a className="photo-gift" href="#playlist">Un regalo pa’ ti <ArrowUpRight size={16}/></a></header>
   <div className="photo-caption"><p>RAÍCES · CARIBE · PARCHE</p><h1>De aquí.<br/><em>Del corazón.</em></h1><a href="#playlist" className="photo-cta">Pa’ sentir el Caribe <ArrowDown size={17}/></a></div>
   <div className="photo-controls"><Button variant="ghost" size="icon" onClick={()=>api?.scrollPrev()} aria-label="Foto anterior"><ChevronLeft/></Button><span aria-live="polite">0{selected+1} <i>/ 04</i></span><Button variant="ghost" size="icon" onClick={()=>api?.scrollNext()} aria-label="Foto siguiente"><ChevronRight/></Button></div>
   <div className="photo-socials"><a href={content.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={18}/></a><a href={content.spotifyUrl} target="_blank" rel="noreferrer" aria-label="Spotify"><Music2 size={18}/></a><a href={content.youtubeUrl??content.youtubeSearchUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><Video size={18}/></a></div>
  </Carousel>
 </section>
}
