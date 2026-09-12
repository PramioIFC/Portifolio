import {useEffect,useRef,useState} from 'react';

const galleries={
  flux:[
    ['/assets/flux-inicio.png','Tela inicial do aplicativo Flux','INÍCIO E DESCOBERTA'],
    ['/assets/flux-busca.png','Resultados da busca musical do Flux','BUSCA E CATÁLOGO'],
    ['/assets/flux-player.png','Reprodutor musical do Flux','REPRODUÇÃO'],
    ['/assets/flux-telas.png','Conjunto completo de telas do aplicativo Flux','EXPERIÊNCIA COMPLETA']
  ],
  smaar:[
    ['/assets/smaar-porteiras.png','Lista de porteiras monitoradas pelo SMAAR','PORTEIRAS'],
    ['/assets/smaar-controle.png','Controle da porteira principal no SMAAR','CONTROLE'],
    ['/assets/smaar-historico.png','Histórico diário no SMAAR','HISTÓRICO'],
    ['/assets/smaar-calendario.png','Calendário de eventos no SMAAR','CALENDÁRIO']
  ],
  resolvetech:[
    ['/assets/resolvetech-formularios.jpg','Criação automática de formulários no ResolveTech','AUTOMAÇÃO DE FORMULÁRIOS'],
    ['/assets/resolvetech-atendimento.jpg','Atendimento humano e por IA no ResolveTech','ATENDIMENTO HUMANO E IA'],
    ['/assets/resolvetech-checklist.jpg','Checklist para revisão humana no ResolveTech','REVISÃO HUMANA'],
    ['/assets/resolvetech-gerenciamento.jpg','Central de gerenciamento de demandas do ResolveTech','GESTÃO DE DEMANDAS']
  ]
};

export default function ProjectVisual({project}){
  const slides=galleries[project.slug];
  const[open,setOpen]=useState(false);
  const[index,setIndex]=useState(0);
  const startX=useRef(null);
  const move=direction=>setIndex(current=>(current+direction+slides.length)%slides.length);

  useEffect(()=>{
    if(!open)return;
    document.body.classList.add('gallery-open');
    const key=e=>{if(e.key==='Escape')setOpen(false);if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)};
    addEventListener('keydown',key);
    return()=>{document.body.classList.remove('gallery-open');removeEventListener('keydown',key)};
  },[open]);

  const touchStart=e=>{startX.current=e.touches[0].clientX};
  const touchEnd=e=>{
    if(startX.current===null)return;
    const distance=e.changedTouches[0].clientX-startX.current;
    if(Math.abs(distance)>45)move(distance<0?1:-1);
    startX.current=null;
  };

  return <>
    <button className={`project-preview preview-${project.slug}`} type="button" onClick={()=>setOpen(true)} aria-label={`Ver imagens do projeto ${project.name}`}>
      <img src={slides[0][0]} alt="" loading="lazy"/>
      <span>VER PROJETO <b>↗</b></span>
      <small>{String(slides.length).padStart(2,'0')} IMAGENS</small>
    </button>
    {open&&<div className={`gallery-modal modal-${project.slug}`} role="dialog" aria-modal="true" aria-label={`Galeria do projeto ${project.name}`} onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
      <div className="modal-panel">
        <header><span>{project.name}</span><span>{String(index+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span><button type="button" onClick={()=>setOpen(false)} aria-label="Fechar galeria">×</button></header>
        <div className="modal-viewport" onTouchStart={touchStart} onTouchEnd={touchEnd}>
          <div className="modal-track" style={{transform:`translateX(-${index*100}%)`}}>
            {slides.map(([src,alt,caption])=><figure key={src}><img src={src} alt={alt}/><figcaption>{caption}</figcaption></figure>)}
          </div>
          <button className="modal-arrow previous" type="button" onClick={()=>move(-1)} aria-label="Imagem anterior">←</button>
          <button className="modal-arrow next" type="button" onClick={()=>move(1)} aria-label="Próxima imagem">→</button>
        </div>
        <div className="modal-dots">{slides.map((slide,i)=><button key={slide[0]} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Ver imagem ${i+1}`}/>)}</div>
      </div>
    </div>}
  </>;
}
