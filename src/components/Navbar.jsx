import {useEffect,useState} from 'react';

const links=[['#about','Sobre'],['#work','Projetos'],['#stack','Competências'],['#contact','Contato']];

export default function Navbar(){
  const[scrolled,setScrolled]=useState(false);
  const[open,setOpen]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(scrollY>24);fn();addEventListener('scroll',fn,{passive:true});return()=>removeEventListener('scroll',fn)},[]);
  useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open]);
  return <nav className={(scrolled?'nav scrolled':'nav')+(open?' menu-active':'')} aria-label="Navegação principal">
    <a className="brand" href="#top" aria-label="João Pramio — início" onClick={()=>setOpen(false)}><img src="/assets/pramio-wordmark.png" alt=""/></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Fechar menu':'Abrir menu'} onClick={()=>setOpen(!open)}><span/><span/></button>
    <div id="mobile-menu" className="nav-links">{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</div>
  </nav>
}
