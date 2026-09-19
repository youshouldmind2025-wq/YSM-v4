import { ConsultantBio, PartnerCompany } from '../types.ts';

export const CONSULTANT_DATA: ConsultantBio = {
  name: 'Ruy Ferreira Amaral',
  title: 'Founder/CEO da YSM Consultancy Agency',
  agencyRole: '',
  photo: '/ruy-ferreira-amaral.jpg',
  specializations: [
    'Auditor',
    'Especialista em Customer Success',
    'Sustentabilidade (ESG)',
    'Estrategista em Liderança & Saúde Mental',
    'Palestrante Internacional',
  ],
  roles: [
    'Auditor. Especialista em Customer Success e Sustentabilidade (ESG).',
    'Palestrante e Estrategista em Liderança, Sustentabilidade Organizacional e Saúde Mental.',
    'Docente em temas ESG e RH na Academia BAI (Luanda | Angola).',
    'Membro do Painel de Peritos da Consumer Choice para o Prémio “Escolha Sustentável”.',
    'Director de Sustentabilidade e Impacto Social da PGA Portugal.',
    'Co‑Coordenador do Grupo Luso‑Brasileiro de Sustentabilidade em Lisboa.',
  ],
  education: [
    'Formado em Gestão; Mestrando em Estudos Sociais do Ambiente e Sustentabilidade (ISCTE).',
  ],
  passions: [
    'Golfista como hobbie. Escritor por paixão.',
  ],
  phone: '+351 965 500 400',
  website: 'www.youshouldmind.pt',
  email: 'ruy@youshouldmind.pt',
  linkedin: 'https://www.linkedin.com/in/ruiferreiraamaral/',
  quote: 'Se HOJE nada disto tem haver consigo, então QUANDO vai perceber que os desafios da sustentabilidade já estão à sua porta e SE QUISER podem ser vantagens competitivas?',
  quoteAuthor: 'RFA',
};

export const PARTNER_COMPANIES: PartnerCompany[] = [
  {
    id: 'brain-global',
    name: 'Brain Global',
    category: 'Estratégia & Inovação Global',
    url: 'https://brain.global/',
    description: 'Uma das maiores referências no mercado do entretenimento e comunicação em Portugal.',
  },
  {
    id: 'avila-spaces',
    name: 'Avila Spaces',
    category: 'Workspaces & Coworking',
    url: 'https://avilaspaces.com/en/',
    description: 'Espaços de trabalho e ecossistema de escritórios de referência em Lisboa.',
  },
  {
    id: 'lopes-ribeiro',
    name: 'Lopes Ribeiro',
    category: 'Reparação Automóvel',
    url: 'https://www.lopesribeiro.pt/',
    description: 'Empresa especializada e de referência em reparação automóvel.',
  },
  {
    id: 'revista-business-portugal',
    name: 'Revista Business Portugal',
    category: 'Media & Negócios',
    url: 'https://revistabusinessportugal.pt/',
    description: 'Publicação de referência sobre economia, empresas e tendências em Portugal.',
  },
  {
    id: 'pga-portugal',
    name: 'PGA Portugal',
    category: 'Desporto & Sustentabilidade',
    url: 'https://pgaportugal.pt/',
    description: 'Associação de Profissionais de Golfe de Portugal.',
  },
  {
    id: 'junk-service',
    name: 'Junk Service',
    category: 'Gestão de Resíduos & Economia Circular',
    url: 'https://junkservice.pt/',
    description: 'Serviços especializados de recolha, triagem e reciclagem sustentável.',
  },
];
