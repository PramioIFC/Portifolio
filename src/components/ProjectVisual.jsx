export default function ProjectVisual({project}){
  if(project.slug==='flux')return <div className="project-visual flux-gallery" aria-label={project.imageAlt}>
    <figure className="flux-main"><img src="/assets/flux-inicio.png" alt="Tela inicial do aplicativo Flux" loading="lazy"/><figcaption>01 — INÍCIO E DESCOBERTA</figcaption></figure>
    <figure><img src="/assets/flux-busca.png" alt="Resultados da busca musical do Flux" loading="lazy"/><figcaption>02 — BUSCA E CATÁLOGO</figcaption></figure>
    <figure><img src="/assets/flux-player.png" alt="Reprodutor musical do Flux" loading="lazy"/><figcaption>03 — REPRODUÇÃO</figcaption></figure>
  </div>;
  if(project.slug==='smaar')return <div className="project-visual smaar-gallery" aria-label={project.imageAlt}>
    <figure><img src="/assets/smaar-porteiras.png" alt="Lista de porteiras monitoradas pelo SMAAR" loading="lazy"/><figcaption>01 — PORTEIRAS</figcaption></figure>
    <figure><img src="/assets/smaar-controle.png" alt="Controle e estado da porteira principal no SMAAR" loading="lazy"/><figcaption>02 — CONTROLE</figcaption></figure>
    <figure><img src="/assets/smaar-historico.png" alt="Histórico diário de abertura e fechamento no SMAAR" loading="lazy"/><figcaption>03 — HISTÓRICO</figcaption></figure>
    <figure><img src="/assets/smaar-calendario.png" alt="Calendário de eventos das porteiras no SMAAR" loading="lazy"/><figcaption>04 — CALENDÁRIO</figcaption></figure>
  </div>;
  if(project.image)return <div className={'project-visual '+project.slug}><img src={project.image} alt={project.imageAlt} loading="lazy"/></div>;
  return <div className="project-visual resolve-gallery" aria-label={project.imageAlt}>
    <figure className="resolve-main"><img src="/assets/resolvetech-atendimento.jpg" alt="Atendimento assistido do ResolveTech com conversa entre cliente e IA" loading="lazy"/><figcaption>01 — ATENDIMENTO COM IA</figcaption></figure>
    <figure><img src="/assets/resolvetech-checklist.jpg" alt="Formulário da demanda e checklist para geração de relatório" loading="lazy"/><figcaption>02 — REVISÃO HUMANA</figcaption></figure>
    <figure><img src="/assets/resolvetech-formularios.jpg" alt="Criação automática de formulários a partir de um protocolo" loading="lazy"/><figcaption>03 — AUTOMAÇÃO DE FORMULÁRIOS</figcaption></figure>
  </div>
}
