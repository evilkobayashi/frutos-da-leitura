/**
 * Base de Dados do Projeto Pedagógico:
 * "Frutos da Leitura: Da Raiz escrita à Árvore digital: Estudo e diversão na disciplina PTL"
 * Município de Queimados - RJ
 * Tema: "Árvore: afeto que aproxima, tecnologia que ensina, educação que transforma"
 */

const PROJECT_INFO = {
  title: "Frutos da Leitura",
  subtitle: "Da Raiz escrita à Árvore digital: Estudo e diversão na disciplina PTL",
  city: "Queimados - RJ",
  theme: "Árvore: afeto que aproxima, tecnologia que ensina, educação que transforma",
  discipline: "PTL (Produção Textual e Leitura)",
  classes: ["601", "602", "701", "702", "801", "802"],
  partnerPlatform: "Plataforma de Leitura Digital Árvore",
  generalObjective: "Expor à comunidade escolar a produção textual dos alunos integrada a recursos tecnológicos, culminando em uma experiência interativa física e virtual.",
  specificObjectives: [
    "Consolidar o aprendizado dos gêneros trabalhados (Biografia, Entrevista, Notícia, Reportagem, Crônica e Fábula).",
    "Valorizar a autoria discente por meio da publicação digital e física dos trabalhos.",
    "Estimular o pensamento computacional e o letramento digital em consonância com as diretrizes da nossa rede de ensino."
  ]
};

const WORKS_DATA = [
  {
    id: "trab-01",
    file: "VID-20261031-WA0026.mp4",
    title: "A Jornada do Pequeno Carneirinho: O Primeiro Dia na Floresta do Conhecimento",
    grade: "8º Ano",
    classes: ["801"],
    genre: "Fábula Animada",
    genreType: "fabula",
    duration: "1m 08s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0026.jpg",
    tags: ["Animação Digital", "Moral da História", "Empatia", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7", // Violeta
    summary: "Reinterpretação contemporânea da fábula clássica produzida pelos estudantes com auxílio de inteligência artificial generativa e edição criativa. Narra a história de um carneirinho que descobre que aprender é o caminho para transformar o mundo.",
    pedagogicalFocus: "Construção de personagens alegóricos, síntese narrativa e a elaboração da moral da história em formato audiovisual moderno.",
    authors: "Turma 801 - Equipe Criativa de Fábulas"
  },
  {
    id: "trab-02",
    file: "VID-20261031-WA0029.mp4",
    title: "Conversa com o Mestre: Memórias e Histórias da Sala de Aula",
    grade: "6º Ano",
    classes: ["601"],
    genre: "Entrevista Pedagógica",
    genreType: "entrevista",
    duration: "4m 52s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0029.jpg",
    tags: ["Entrevista", "Diálogo", "Professores", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981", // Verde Esmeralda
    summary: "Os estudantes do 6º ano colocam em prática as técnicas de entrevista jornalística, conversando abertamente com o professor sobre sua trajetória, vocação pedagógica e o poder que a leitura tem de aproximar pessoas.",
    pedagogicalFocus: "Elaboração de pauta prévia, condução de perguntas abertas, postura de escuta ativa e transcrição/edição das falas mais impactantes.",
    authors: "Turma 601 - Repórteres do 6º Ano"
  },
  {
    id: "trab-03",
    file: "VID-20261031-WA0030.mp4",
    title: "Plantão Especial: Breaking News - Rodas sobre Rodas em Queimados",
    grade: "7º Ano",
    classes: ["701"],
    genre: "Notícia & Reportagem",
    genreType: "reportagem",
    duration: "2m 18s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0030.jpg",
    tags: ["Breaking News", "Telejornal", "Mobilidade", "7º Ano"],
    badgeColor: "amber",
    fruitColor: "#f59e0b", // Âmbar Dourado
    summary: "Reportagem com formato dinâmico de telejornal investigativo. A aluna âncora apresenta a temática 'Rodas sobre Rodas', refletindo sobre mobilidade, trânsito urbano e a presença dos meios de transporte no cotidiano de Queimados.",
    pedagogicalFocus: "Diferenciação prática entre o lead jornalístico imediato (Notícia) e o aprofundamento investigativo (Reportagem com viés comunitário).",
    authors: "Turma 701 - Equipe do Plantão Escolar"
  },
  {
    id: "trab-04",
    file: "VID-20261031-WA0031.mp4",
    title: "Jornal PTL em Foco: Notícias, Escola e Protagonismo Estudantil",
    grade: "7º Ano",
    classes: ["702"],
    genre: "Telejornal Comunitário",
    genreType: "reportagem",
    duration: "5m 08s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0031_20s.jpg",
    tags: ["Bancada", "Apresentação", "Cidadania", "7º Ano"],
    badgeColor: "amber",
    fruitColor: "#f59e0b",
    summary: "Duas estudantes assumem a bancada de um telejornal completo no estúdio virtual NEWS, noticiando projetos da escola, eventos esportivos e culturais, além de reflexões sobre a convivência saudável no ambiente escolar.",
    pedagogicalFocus: "Trabalho em equipe, oratória em frente às câmeras, hierarquização de notícias e linguagem formal e acessível.",
    authors: "Turma 702 - Redação Jornal PTL"
  },
  {
    id: "trab-05",
    file: "VID-20261031-WA0032.mp4",
    title: "Raízes de Vida: Trajetórias e Inspirações Familiares",
    grade: "6º Ano",
    classes: ["602"],
    genre: "Biografia Oral",
    genreType: "biografia",
    duration: "3m 05s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0032_20s.jpg",
    tags: ["História de Vida", "Afeto", "Oralidade", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981",
    summary: "Gravação intimista que resgata memórias biográficas de pessoas inspiradoras da comunidade, destacando as lutas, a importância dos estudos e os valores transmitidos entre gerações.",
    pedagogicalFocus: "Construção da linha do tempo biográfica a partir de relatos orais, contextualizando a história individual no tecido social.",
    authors: "Turma 602 - Coletivo Raízes Biográficas"
  },
  {
    id: "trab-06",
    file: "VID-20261031-WA0033.mp4",
    title: "Olhares da Juventude: O Cotidiano pelos Olhos do Estudante",
    grade: "8º Ano",
    classes: ["802"],
    genre: "Crônica Discente",
    genreType: "cronica",
    duration: "1m 27s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0033_20s.jpg",
    tags: ["Crônica", "Reflexão", "Cotidiano", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Monólogo reflexivo no formato de crônica audiovisual. O estudante expõe com sinceridade pensamentos sobre o crescimento, os anseios de sua geração e como a leitura amplia horizontes.",
    pedagogicalFocus: "A observação perspicaz do cotidiano, tom poético-crítico e a autoria discente em primeira pessoa.",
    authors: "Turma 802 - Vozes da Crônica"
  },
  {
    id: "trab-07",
    file: "VID-20261101-WA0003.mp4",
    title: "Vozes da Comunidade: Entrevista com Dona Silva",
    grade: "6º Ano",
    classes: ["601"],
    genre: "Entrevista Comunitária",
    genreType: "entrevista",
    duration: "4m 08s",
    thumbnail: "assets/thumbnails/6_VID-20261101-WA0003.mp4_30s.jpg",
    tags: ["Entrevista", "Comunidade", "Identidade", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981",
    summary: "Estudante do 6º ano sai a campo com microfone para entrevistar Dona Silva em sua residência, explorando costumes, histórias do bairro e a visão de uma moradora sobre a educação dos jovens.",
    pedagogicalFocus: "Pesquisa de campo, conexão da escola com a comunidade de Queimados e valorização dos saberes populares.",
    authors: "Turma 601 - Grupo Repórter de Bairro"
  },
  {
    id: "trab-08",
    file: "VID-20261101-WA0004.mp4",
    title: "Expressão em Cores: Narrando Fábulas com a Alma Estudantil",
    grade: "8º Ano",
    classes: ["801"],
    genre: "Fábula & Performance Literária",
    genreType: "fabula",
    duration: "6m 38s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0004_20s.jpg",
    tags: ["Performance", "Fábula", "Uniforme Queimados", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Aluna vestindo o uniforme da Rede Municipal de Ensino de Queimados entrega uma performance viva de narração de fábula, demonstrando expressividade vocal, pontuação e paixão pela literatura oral.",
    pedagogicalFocus: "A expressividade na leitura em voz alta, dicção, pontuação dramática e transmissão dos valores éticos das fábulas.",
    authors: "Turma 801 - Coletivo Contadores de Histórias"
  },
  {
    id: "trab-09",
    file: "VID-20261101-WA0006.mp4",
    title: "Caderno Aberto: Esperamos que Gostem! Afeto e Aprendizagem",
    grade: "8º Ano",
    classes: ["802"],
    genre: "Crônica Visual & Digital",
    genreType: "cronica",
    duration: "2m 33s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0006_20s.jpg",
    tags: ["Crônica Visual", "Arte Digital", "Acolhimento", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Vídeo com estética artesanal e digital inspirada em scrapbooks escolares ('Esperamos que gostem'), combinando ilustrações delicadas, mensagens de acolhimento e crônicas sobre amizade e aprendizado.",
    pedagogicalFocus: "Linguagem multissemiótica, integrando texto verbal, desenho, colagem digital e trilha sonora afetiva.",
    authors: "Turma 802 - Atelier Digital PTL"
  },
  {
    id: "trab-10",
    file: "VID-20261101-WA0007.mp4",
    title: "Entrevista Exclusiva com o Prof. Cláudio de Souza Soares",
    grade: "6º Ano",
    classes: ["602"],
    genre: "Entrevista & Biografia Profissional",
    genreType: "entrevista",
    duration: "4m 55s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0007_20s.jpg",
    tags: ["Entrevista", "Professor Cláudio", "Roteiro Impresso", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981",
    summary: "O aluno repórter, com roteiro impresso em mãos, conduz uma rica entrevista com o professor Cláudio de Souza Soares, revelando o percurso acadêmico do mestre e seu entusiasmo em ensinar na rede pública de Queimados.",
    pedagogicalFocus: "Elaboração de perguntas encadeadas, transição entre tópicos e a biografia como reconhecimento das figuras educativas.",
    authors: "Turma 602 - Jovens Entrevistadores"
  },
  {
    id: "trab-11",
    file: "VID-20261101-WA0009.mp4",
    title: "Liderança e Educação: Grande Entrevista com a Gestora Cíntia Batista",
    grade: "6º Ano",
    classes: ["601", "602"],
    genre: "Grande Entrevista Institucional",
    genreType: "entrevista",
    duration: "8m 01s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0009_20s.jpg",
    tags: ["Gestão Escolar", "Cíntia Batista", "Liderança", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981",
    summary: "Entrevista aprofundada gravada no gabinete da coordenação/diretoria com a educadora Cíntia Batista. A gestora compartilha os desafios diários da escola, a importância do vínculo família-escola e o orgulho do projeto da feira de ciências.",
    pedagogicalFocus: "Entrevista formal de perfil, respeito ao interlocutor institucional e consolidação do letramento midiático dos alunos.",
    authors: "Turmas 601 e 602 - Projeto Imprensa Mirim"
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    genre: "Fábula",
    question: "Qual é a principal característica que diferencia a FÁBULA de outros gêneros narrativos?",
    options: [
      "Sempre traz personagens que são animais com comportamentos humanos e culmina em uma 'moral da história'.",
      "É um texto jornalístico que noticia fatos que aconteceram na mesma semana.",
      "Consiste em perguntas e respostas gravadas em estúdio com uma celebridade.",
      "É um relato científico baseado em dados matemáticos e experimentos de laboratório."
    ],
    correct: 0,
    explanation: "Na Fábula (trabalhada com o 8º ano), os animais agem e falam como pessoas (personificação) para transmitir uma lição ética ou reflexão sobre a convivência humana."
  },
  {
    id: 2,
    genre: "Entrevista",
    question: "Qual etapa fundamental os alunos do 6º ano realizaram ANTES de gravar as entrevistas com os professores e convidados?",
    options: [
      "Apenas ligar a câmera sem nenhum planejamento prévio.",
      "Elaborar uma pauta de pesquisa e um roteiro estruturado com perguntas abertas e relevantes.",
      "Criar uma fábula em quadrinhos sobre o entrevistado.",
      "Escolher uma música aleatória sem se preocupar com as perguntas."
    ],
    correct: 1,
    explanation: "Uma boa entrevista exige pauta e planejamento: definir o objetivo, pesquisar sobre a vida do entrevistado e estruturar perguntas que permitam respostas ricas."
  },
  {
    id: 3,
    genre: "Reportagem vs Notícia",
    question: "No trabalho do 7º ano sobre o 'Plantão Rodas sobre Rodas', qual é a diferença entre NOTÍCIA e REPORTAGEM?",
    options: [
      "A notícia é poética e rimada, enquanto a reportagem conta apenas piadas.",
      "A notícia relata um fato recente de forma ágil e objetiva; a reportagem aprofunda as causas, dados e impactos na sociedade.",
      "Notícia só pode ser escrita por adultos e reportagem só por crianças.",
      "Ambas são exatamente a mesma coisa e não possuem nenhuma diferença de formato ou objetivo."
    ],
    correct: 1,
    explanation: "A Notícia informa o fato imediato (o que aconteceu, quando e onde), enquanto a Reportagem investiga, ouve especialistas, analisa o contexto comunitário e traz detalhes mais profundos."
  },
  {
    id: 4,
    genre: "Crônica",
    question: "O gênero CRÔNICA, trabalhado nas turmas 801 e 802, é caracterizado por:",
    options: [
      "Partir de acontecimentos simples do cotidiano para propor uma reflexão poética, crítica ou humorística.",
      "Exigir fórmulas matemáticas e comprovações de laboratório.",
      "Ser sempre um contrato assinado em cartório.",
      "Conter apenas tabelas de preços de produtos de supermercado."
    ],
    correct: 0,
    explanation: "A crônica transforma um detalhe do dia a dia da escola, da rua ou da família em uma reflexão sensível, aproximando o leitor através do afeto e da literatura."
  },
  {
    id: 5,
    genre: "Tema Municipal",
    question: "Qual é o lema oficial do município de Queimados que inspira toda a nossa Mostra da Árvore?",
    options: [
      "'Árvore: afeto que aproxima, tecnologia que ensina, educação que transforma.'",
      "'Apenas livros físicos sem nenhuma tecnologia digital.'",
      "'Computadores substituem completamente os professores.'",
      "'Aprender é apenas decorar regras para a prova.'"
    ],
    correct: 0,
    explanation: "O lema conecta o calor humano (afeto), as novas ferramentas digitais (tecnologia que ensina) e o poder transformador da escola pública de Queimados."
  }
];

const WORDSEARCH_WORDS = [
  "ARVORE",
  "PTL",
  "AFETO",
  "BIOGRAFIA",
  "ENTREVISTA",
  "NOTICIA",
  "REPORTAGEM",
  "CRONICA",
  "FABULA",
  "QUEIMADOS"
];

const MEMORY_CARDS = [
  { id: 1, pairId: "bio", label: "Biografia", desc: "História de vida com relatos de memórias e trajetórias inspiradoras." },
  { id: 2, pairId: "bio", label: "Raízes de Vida", desc: "Gênero estudado pelo 6º ano sobre memórias de educadores." },
  { id: 3, pairId: "ent", label: "Entrevista", desc: "Diálogo estruturado com pauta e perguntas entre repórter e entrevistado." },
  { id: 4, pairId: "ent", label: "Vozes Reais", desc: "Trabalho realizado com o Prof. Cláudio e a Gestora Cíntia." },
  { id: 5, pairId: "rep", label: "Reportagem", desc: "Investigação aprofundada com temas escolares e comunitários." },
  { id: 6, pairId: "rep", label: "Jornal NEWS", desc: "Produção de bancada e estúdio virtual do 7º ano." },
  { id: 7, pairId: "fab", label: "Fábula", desc: "Narrativa alegórica com animais e moral da história reflexiva." },
  { id: 8, pairId: "fab", label: "Carneirinho", desc: "Animação digital e performance literária do 8º ano." }
];
