import { PhotoHero } from './PhotoHero';
import './v2.css';
import Image from './image';
import { ArrowUpRight, Play, Camera, Music2, Video } from 'lucide-react';

import { content } from './content';
const spotify = content.spotifyUrl;
const release = content.release.url;
const instagram = content.instagramUrl;

export default function Home() {
 return <div className="v2">
  <a className="skip" href="#contenido">Saltar al contenido</a>
  <main id="contenido"><PhotoHero/>
   <div className="ribbon" aria-hidden="true"><span>RAÍZ</span>✳<span>SABOR</span>✳<span>MÚSICA</span>✳<span>CARIBE</span>✳<span>PARCHE</span>✳<span>SENTIR</span>✳</div>
   <section className="playlist section" id="playlist"><div className="playlist-art"><div className="disc"><Image unoptimized src={import.meta.env.BASE_URL + 'playlist.webp'} alt="Pa’ sentir el Caribe, selección musical de Valen" width="431" height="431"/></div></div><div className="playlist-copy"><p className="eyebrow">01 / UN REGALO DE VALEN</p><h2>Pa’ sentir<br/><em>el Caribe.</em></h2><p>Mis raíces, mis descubrimientos y mi música. Una selección que sabe a brisa y buen parche.</p><div className="playlist-action"><p className="coming">{content.playlistUrl ? "Dale play y llévate el Caribe contigo." : "Playlist disponible pronto."}</p><a className="button yellow" href={content.playlistUrl ?? spotify} target="_blank" rel="noreferrer"><Play size={17}/> {content.playlistUrl ? "Escuchar la playlist" : "Escucha mi música"} <ArrowUpRight size={19}/></a></div></div></section>
   <section className="universe section" id="universo"><div className="universe-copy"><p className="eyebrow">02 / MUCHO GUSTO, SOY VALEN</p><h2>Música de raíz.<br/><em>Y de corazón.</em></h2><p>Entre el bolero, el bossa nova y el reggae, mi música encuentra su esencia tropical. Poesía, vientos y ritmo para encontrarnos.</p><p className="signature"><span>Valen ♡</span></p></div><div className="universe-art"><Image unoptimized className="portrait" src={import.meta.env.BASE_URL + 'valen-en-vivo.webp'} alt="Valen Espitia tocando el saxofón en concierto" width="1050" height="1400" loading="lazy"/><p>El escenario también es casa.</p></div></section>
   <section className="release section" id="musica"><div className="release-heading"><p className="eyebrow">03 / LO QUE ESTÁ SONANDO</p><span>VALEN ESPITIA · {content.release.format}</span></div><div className="release-grid"><div className="release-visual"><Image unoptimized src={content.release.image} alt={content.release.imageAlt} width="1500" height="1500" loading="lazy"/><span className="live-tag"><span/> MÚSICA EN VIVO</span></div><div className="release-copy"><p className="eyebrow">{content.release.label}</p><h2>{content.release.firstLine}<br/><em>{content.release.secondLine}</em></h2><p>{content.release.description}</p><a className="button primary" href={release} target="_blank" rel="noreferrer"><Play size={17}/> {content.release.buttonLabel} <ArrowUpRight size={20}/></a><a className="text-link" href={spotify} target="_blank" rel="noreferrer">Explorar toda mi música <ArrowUpRight size={17}/></a></div></div></section>
   <section className="parche section" id="parche"><Image unoptimized src={import.meta.env.BASE_URL + 'sol.webp'} alt="" width="1500" height="1500" loading="lazy"/><p className="eyebrow">EL PARCHE SIGUE POR AQUÍ</p><h2>Sigamos<br/><em>en el parche.</em></h2><div className="socials"><a href={instagram} target="_blank" rel="noreferrer"><Camera size={20}/> Instagram <ArrowUpRight size={19}/></a><a href={spotify} target="_blank" rel="noreferrer"><Music2 size={20}/> Spotify <ArrowUpRight size={19}/></a><a href={content.youtubeUrl ?? content.youtubeSearchUrl} target="_blank" rel="noreferrer"><Video size={20}/> {content.youtubeUrl ? "YouTube" : "Buscar en YouTube"} <ArrowUpRight size={19}/></a></div></section>
  </main><footer><a className="wordmark" href="#inicio">valen espitia</a><span>HECHO DE RAÍZ, RITMO Y CORAZÓN.</span><a href="mailto:valenespitia.musica@gmail.com">Conciertos y colaboraciones <ArrowUpRight size={16}/></a></footer>
 </div>;
}
