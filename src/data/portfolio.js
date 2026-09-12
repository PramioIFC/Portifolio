export const portfolio = {
  name: 'João Vitor Pramio',
  shortName: 'João Pramio',
  role: 'Desenvolvedor Full Stack',
  school: 'Instituto Federal Catarinense — Campus Concórdia',
  location: 'Concórdia, SC',
  intro: 'Desenvolvo produtos digitais que conectam interfaces cuidadas, sistemas consistentes e problemas reais.',
  bio: ['Sou João Vitor Pramio, estudante do Instituto Federal Catarinense — Campus Concórdia e desenvolvedor Full Stack.', 'Gosto de entender um problema por inteiro: da experiência de quem usa à lógica, integrações e dados que sustentam o produto. Em meus projetos, exploro aplicações multiplataforma, APIs, IoT e inteligência artificial com atenção à clareza e à execução.'],
  socials: {
    github: 'https://github.com/PramioIFC',
    instagram: 'https://www.instagram.com/joaovitor_pramio/',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-pramio-64370b321/',
    email: ''
  },
  projects: [
    {slug:'flux', number:'01', name:'Flux', category:'APLICATIVO MÓVEL / MÚSICA', year:'2026', image:'/assets/flux-showcase.png', imageAlt:'Telas do aplicativo musical Flux', summary:'Uma experiência musical multiplataforma que une reprodução, busca, playlists e recursos sociais em uma interface construída com Flutter.', detail:'O reprodutor trabalha com fila, progresso, repetição e modo aleatório. Um catálogo imutável limita a reprodução a faixas autorizadas e mantém origem e licença junto dos metadados; Supabase adiciona autenticação e sincronização opcionais.', stack:['Flutter','Dart','Provider','just_audio','Supabase','PostgreSQL'], github:'https://github.com/PramioIFC/Flux'},
    {slug:'smaar', number:'02', name:'SMAAR', category:'APLICATIVO / API / IOT', year:'2026', image:'/assets/smaar-showcase.png', imageAlt:'Telas do sistema SMAAR para monitoramento de porteiras', summary:'Controle e monitoramento de porteiras rurais, conectando o campo ao celular por uma arquitetura que atravessa software e hardware.', detail:'O aplicativo consulta estados, envia comandos e organiza o histórico por calendário. A API registra eventos e conversa com ESP8266 e Arduino; autenticação JWT, alertas via Firebase e acesso por rede local ou Ngrok completam o fluxo.', stack:['Flutter','Django REST','PostgreSQL','Arduino','ESP8266','Firebase'], github:'https://github.com/PramioIFC/SMAAR'},
    {slug:'resolvetech', number:'03', name:'ResolveTech', category:'APLICAÇÃO WEB / SUPORTE COM IA', year:'2026', image:null, imageAlt:'Composição visual do fluxo de atendimento ResolveTech', summary:'Uma central de suporte que preserva contexto e conduz cada demanda do primeiro relato à equipe de desenvolvimento.', detail:'O MVP combina investigação inicial com IA e comunicação humana por chat ou chamada de voz, mantendo o contexto do atendimento em uma única demanda. Anexos, formulários versionados, lista de verificação, revisão humana e relatório técnico organizam o encaminhamento; WebRTC viabiliza as chamadas em tempo real.', stack:['React 19','TypeScript','Python','SQLite','Groq','WebRTC','Docker'], github:'https://github.com/PramioIFC/ResolveTech'}
  ],
  skills: [
    {number:'01', title:'Interfaces', items:['React','JavaScript','TypeScript','HTML','CSS','Vite','Flutter']},
    {number:'02', title:'Sistemas', items:['Python','Flask','Django','Node.js','APIs REST']},
    {number:'03', title:'Dados e serviços', items:['PostgreSQL','MySQL','SQLite','Firebase','Supabase']},
    {number:'04', title:'Ferramentas e fluxo', items:['Git','GitHub','Groq','NGROK','Trello','Canva','Overleaf','Google Workspace','LibreOffice']}
  ]
};
