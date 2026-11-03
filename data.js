/**
 * Base de Dados do Projeto Pedagógico:
 * "Frutos da Leitura: Da Raiz escrita à Árvore digital: Estudo e diversão na disciplina PTL"
 * Unidade Escolar: E. M. Professor Joaquim de Freitas
 * Autores: Prof.ª Kelly Giri & Turmas 601 a 802
 * Município de Queimados - RJ
 * Tema: "Árvore: afeto que aproxima, tecnologia que ensina, educação que transforma"
 */

const PROJECT_INFO = {
  title: "Frutos da Leitura",
  subtitle: "Da Raiz escrita à Árvore digital: Estudo e diversão na disciplina PTL",
  school: "E. M. Professor Joaquim de Freitas",
  authors: "Prof.ª Kelly Giri & Turmas 601 a 802",
  city: "Queimados - RJ",
  theme: "Árvore: afeto que aproxima, tecnologia que ensina, educação que transforma",
  discipline: "PTL (Produção Textual e Leitura)",
  classes: ["601", "602", "701", "702", "801", "802"],
  partnerPlatform: "Plataforma de Leitura Digital Árvore",
  contextOrChallenge: "A cultura da leitura e da escrita no cotidiano escolar precisava romper os muros da sala de aula e o formato da tarefa tradicional avaliativa. O desafio foi articular o letramento literário (Plataforma Árvore) ao protagonismo discente e ao tema do município, integrando sustentabilidade e tecnologia para que os saberes produzidos se tornassem o fruto visível de um percurso formativo.",
  objective: "Consolidar o aprendizado dos gêneros trabalhados (Biografia, Entrevista, Notícia, Reportagem, Crônica e Fábula); valorizar a autoria discente por meio da publicação digital e física dos trabalhos; e estimular o pensamento computacional e o letramento digital em consonância com as diretrizes da nossa rede de ensino.",
  journeyStages: [
    {
      num: 1,
      title: "Curadoria",
      desc: "Revisão ortográfica e textual dos melhores trabalhos produzidos pelos grupos das turmas 601 a 802, articulados às leituras na Plataforma Árvore.",
      icon: "📚"
    },
    {
      num: 2,
      title: "Oficina",
      desc: "Oficinas práticas de papel reciclado para confecção de livretos físicos, estruturação de roteiros, pautas de reportagem e uso de ferramentas criativas.",
      icon: "✂️"
    },
    {
      num: 3,
      title: "Edição",
      desc: "Gravação e pós-produção audiovisual (textos escritos, podcasts de entrevistas, vídeos animados de fábulas com IA e reportagens em vídeo).",
      icon: "🎬"
    },
    {
      num: 4,
      title: "Mostra",
      desc: "Instalação cenográfica da Árvore física com QR Codes de material reciclado no pátio da escola e lançamento da Vitrine Virtual com os alunos atuando como mediadores tecnológicos.",
      icon: "🌳"
    }
  ],
  learningResults: [
    "Expressiva aprendizagem e engajamento ativo de todas as turmas (601 a 802).",
    "Produção de 15 mídias audiovisuais completas e publicações físicas artesanais com capas de papel reciclado.",
    "Desenvolvimento de competências comunicativas, autonomia, criticidade e domínio de ferramentas digitais."
  ],
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
    fruitColor: "#a855f7",
    summary: "Reinterpretação contemporânea da fábula clássica produzida pelos estudantes com auxílio de inteligência artificial generativa e edição criativa. Narra a história de um carneirinho que descobre que aprender é o caminho para transformar o mundo.",
    pedagogicalFocus: "Construção de personagens alegóricos, síntese narrativa e a elaboração da moral da história em formato audiovisual moderno.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 801 (Prof.ª Kelly Giri)"
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
    fruitColor: "#10b981",
    summary: "Os estudantes do 6º ano colocam em prática as técnicas de entrevista jornalística, conversando abertamente com o professor sobre sua trajetória, vocação pedagógica e o poder que a leitura tem de aproximar pessoas.",
    pedagogicalFocus: "Elaboração de pauta prévia, condução de perguntas abertas, postura de escuta ativa e transcrição/edição das falas mais impactantes.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 601 (Prof.ª Kelly Giri)"
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
    fruitColor: "#f59e0b",
    summary: "Reportagem com formato dinâmico de telejornal investigativo. A aluna âncora apresenta a temática 'Rodas sobre Rodas', refletindo sobre mobilidade, trânsito urbano e a presença dos meios de transporte no cotidiano de Queimados.",
    pedagogicalFocus: "Diferenciação prática entre o lead jornalístico imediato (Notícia) e o aprofundamento investigativo (Reportagem com viés comunitário).",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 701 (Prof.ª Kelly Giri)"
  },
  {
    id: "trab-04",
    file: "VID-20261031-WA0031.mp4",
    title: "Jornal PTL em Foco: Acessibilidade e Protagonismo Estudantil",
    grade: "7º Ano",
    classes: ["702"],
    genre: "Telejornal Comunitário",
    genreType: "reportagem",
    duration: "5m 08s",
    thumbnail: "assets/thumbnails/VID-20261031-WA0031_20s.jpg",
    tags: ["Bancada", "Acessibilidade", "Cidadania", "7º Ano"],
    badgeColor: "amber",
    fruitColor: "#f59e0b",
    summary: "Duas estudantes assumem a bancada do estúdio virtual NEWS e conduzem uma reportagem especial com entrevistas de campo e depoimentos sobre acessibilidade, inclusão nas escolas e cidadania.",
    pedagogicalFocus: "Trabalho em equipe, oratória em frente às câmeras, apuração de campo com entrevistados e linguagem jornalística acessível.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 702 (Prof.ª Kelly Giri)"
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
    authors: "E. M. Prof. Joaquim de Freitas • Turma 602 (Prof.ª Kelly Giri)"
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
    authors: "E. M. Prof. Joaquim de Freitas • Turma 802 (Prof.ª Kelly Giri)"
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
    authors: "E. M. Prof. Joaquim de Freitas • Turma 601 (Prof.ª Kelly Giri)"
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
    authors: "E. M. Prof. Joaquim de Freitas • Turma 801 (Prof.ª Kelly Giri)"
  },
  {
    id: "trab-09",
    file: "VID-20261101-WA0006.mp4",
    title: "Nossa Sociedade em Foco: Diálogo, Cotidiano e Aprendizagem",
    grade: "8º Ano",
    classes: ["802"],
    genre: "Crônica & Diálogo Social",
    genreType: "cronica",
    duration: "2m 33s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0006_20s.jpg",
    tags: ["Sociedade", "Cotidiano", "Diálogo", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Com abertura criativa estilo scrapbook digital ('Esperamos que gostem! Hoje estamos apresentando um trabalho sobre a nossa sociedade!'), o vídeo registra uma conversa em família refletindo sobre a sociedade, o cotidiano e as transformações da comunidade.",
    pedagogicalFocus: "Linguagem multissemiótica e escuta sensível, articulando abertura gráfica digital e reflexão crítica sobre o convívio em sociedade.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 802 (Prof.ª Kelly Giri)"
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
    authors: "E. M. Prof. Joaquim de Freitas • Turma 602 (Prof.ª Kelly Giri)"
  },
  {
    id: "trab-11",
    file: "VID-20261101-WA0009.mp4",
    title: "Liderança e Educação: Grande Entrevista com a Vice-Prefeita Cíntia Batista",
    grade: "6º Ano",
    classes: ["601", "602"],
    genre: "Grande Entrevista Institucional",
    genreType: "entrevista",
    duration: "8m 01s",
    thumbnail: "assets/thumbnails/VID-20261101-WA0009_20s.jpg",
    tags: ["Gestão Pública", "Cíntia Batista", "Queimados", "6º Ano"],
    badgeColor: "emerald",
    fruitColor: "#10b981",
    summary: "Entrevista especial gravada no gabinete institucional com a Vice-Prefeita de Queimados e educadora Cíntia Batista. A gestora pública compartilha sua trajetória, os desafios da gestão municipal, a valorização da educação e o vínculo com a comunidade escolar.",
    pedagogicalFocus: "Entrevista formal de perfil público, postura jornalística diante de autoridades municipais e consolidação do letramento cidadão.",
    authors: "E. M. Prof. Joaquim de Freitas • Turmas 601 e 602 (Prof.ª Kelly Giri)"
  },
  {
    id: "trab-12",
    file: "VID-20261102-WA0000.mp4",
    title: "Plantão PTL: Inclusão e Dificuldades dos Alunos Surdos",
    grade: "7º Ano",
    classes: ["702"],
    genre: "Reportagem & Entrevista",
    genreType: "reportagem",
    duration: "3m 14s",
    thumbnail: "assets/thumbnails/VID-20261102-WA0000.jpg",
    tags: ["Inclusão", "Acessibilidade", "Breaking News", "7º Ano"],
    badgeColor: "amber",
    fruitColor: "#f59e0b",
    summary: "Reportagem especial que une abertura em telejornal animado sobre a dificuldade dos alunos surdos nas escolas e entrevista de campo com moradora, debatendo inclusão, Libras e acessibilidade no ensino.",
    pedagogicalFocus: "Jornalismo investigativo com temática de empatia, acessibilidade e direitos humanos, combinando animação autoral e entrevistas reais.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 702 (Isabella, Luana e Eloisa • Prof.ª Kelly Giri)"
  },
  {
    id: "trab-13",
    file: "VID-20261103-WA0024.mp4",
    title: "O Lugar na Fila: Respeito Gera Harmonia",
    grade: "8º Ano",
    classes: ["801"],
    genre: "Fábula Animada",
    genreType: "fabula",
    duration: "1m 23s",
    thumbnail: "assets/thumbnails/VID-20261103-WA0024.jpg",
    tags: ["Fábula", "Respeito", "Convivência", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Na floresta, os animais aguardam pacientemente na fila das frutas até que a pressa coloca à prova a convivência do grupo, ensinando que respeitar o lugar do outro é respeitar a todos.",
    pedagogicalFocus: "Construção de narrativa alegórica em animação 3D com moral ética explícita voltada à cidadania e harmonia coletiva.",
    authors: "E. M. Prof. Joaquim de Freitas • Turma 801 (Prof.ª Kelly Giri)"
  },
  {
    id: "trab-14",
    file: "VID-20261103-WA0025.mp4",
    title: "A Fábula da Capivara e o Raposo: Além das Aparências",
    grade: "8º Ano",
    classes: ["801", "802"],
    genre: "Fábula Ilustrada",
    genreType: "fabula",
    duration: "0m 54s",
    thumbnail: "assets/thumbnails/VID-20261103-WA0025.jpg",
    tags: ["Empatia", "Caráter", "Fábula", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Narrativa ilustrada que acompanha uma capivara humilde diante do julgamento apressado de um raposo comerciante, revelando que o verdadeiro valor está no caráter e no respeito ao próximo.",
    pedagogicalFocus: "Combate ao preconceito por meio da literatura fabular, roteirização visual e reflexão moral sobre empatia e humildade.",
    authors: "E. M. Prof. Joaquim de Freitas • 8º Ano (Alunas Maria Hellena e Nicole • Prof.ª Kelly Giri)"
  },
  {
    id: "trab-15",
    file: "VID-20261103-WA0026.mp4",
    title: "O Lobo, o Rei Leão e o Rio Poluído: A União Faz a Força",
    grade: "8º Ano",
    classes: ["801", "802"],
    genre: "Fábula Ambiental",
    genreType: "fabula",
    duration: "0m 48s",
    thumbnail: "assets/thumbnails/VID-20261103-WA0026.jpg",
    tags: ["Meio Ambiente", "União", "Sustentabilidade", "8º Ano"],
    badgeColor: "purple",
    fruitColor: "#a855f7",
    summary: "Diante de um rio tomado pela poluição que ameaça toda a alcateia e a floresta, o lobo e o Rei Leão unem forças para restaurar a natureza, provando que a cooperação transforma o mundo.",
    pedagogicalFocus: "Articulação entre o gênero fábula, recursos de inteligência artificial generativa e consciência socioambiental.",
    authors: "E. M. Prof. Joaquim de Freitas • 8º Ano (Prof.ª Kelly Giri)"
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
  { id: 4, pairId: "ent", label: "Vozes Reais", desc: "Trabalho realizado com o Prof. Cláudio e a Vice-Prefeita Cíntia." },
  { id: 5, pairId: "rep", label: "Reportagem", desc: "Investigação aprofundada com temas escolares e comunitários." },
  { id: 6, pairId: "rep", label: "Jornal NEWS", desc: "Produção de bancada e estúdio virtual do 7º ano." },
  { id: 7, pairId: "fab", label: "Fábula", desc: "Narrativa alegórica com animais e moral da história reflexiva." },
  { id: 8, pairId: "fab", label: "Carneirinho", desc: "Animação digital e performance literária do 8º ano." }
];
