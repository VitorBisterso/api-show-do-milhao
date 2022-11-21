import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getGeographyQuestions() {
  return [
    {
      title: 'Qual é o país que mais produz café no mundo?',
      answersOptions: ['Brasil', 'Colômbia', 'Indonésia', 'Vietnã', 'Irã'],
      correctAnswer: 'Brasil',
    },
    {
      title: 'Em que país fica Praga?',
      answersOptions: [
        'Brasil',
        'Espanha',
        'República Checa',
        'Inglaterra',
        'França',
      ],
      correctAnswer: 'República Checa',
    },
    {
      title: 'Qual a capital da Austrália?',
      answersOptions: ['Camberra', 'Adelaide', 'Sydney', 'Melbourne', 'Jump'],
      correctAnswer: 'Camberra',
    },
    {
      title: 'Qual o nome do menor oceano do mundo?',
      answersOptions: ['Ártico', 'Índico', 'Pacífico', 'Atlântico', 'Maresias'],
      correctAnswer: 'Ártico',
    },
    {
      title: 'Qual rio atravessa Paris?',
      answersOptions: ['Hudson', 'Mississipi', 'Sena', 'Reno', 'Wyoming'],
      correctAnswer: 'Sena',
    },
    {
      title: 'Qual a capital do Brasil?',
      answersOptions: [
        'Amazonas',
        'Rio de Janeiro',
        'São Paulo',
        'Bahia',
        'Brasília',
      ],
      correctAnswer: 'Brasília',
    },
    {
      title: 'Qual a capital do chile?',
      answersOptions: [
        'Singapura',
        'Santiago',
        'San Pablo',
        'Curitiba',
        'Montoya',
      ],
      correctAnswer: 'Santiago',
    },
    {
      title: 'Qual país com a maior área territorial?',
      answersOptions: ['Rússia', 'França', 'China', 'África', 'Tanzânia'],
      correctAnswer: 'Rússia',
    },
    {
      title: 'Qual país não se encontra no BRICS?',
      answersOptions: [
        'Rússia',
        'Brasil',
        'China',
        'África do Sul',
        'Marrocos',
      ],
      correctAnswer: 'Marrocos',
    },
    {
      title: 'Qual o maior encontro territorial fronteiriço?',
      answersOptions: [
        'Rússia e China',
        'Brasil e Chile',
        'China e Índia',
        'EUA e Canadá',
        'Marrocos e Zimbábue',
      ],
      correctAnswer: 'EUA e Canadá',
    },
  ];
}

function getScienceQuestions() {
  return [
    {
      title: 'Qual desastre natural é medido por escalar Richter?',
      answersOptions: [
        'Tornados',
        'Terremotos',
        'Dilúvios',
        'Furacões',
        'Desabamento',
      ],
      correctAnswer: 'Terremotos',
    },
    {
      title: 'Qual o planeta mais próximo do sol?',
      answersOptions: ['Terra', 'Marte', 'Mercúrio', 'Júpiter', 'Saturno'],
      correctAnswer: 'Mercúrio',
    },
    {
      title: 'O que significa DNA?',
      answersOptions: [
        'Ácido desoxirribonuclear',
        'Ácido duoxirribonuclear',
        'Ácido duoxirribonucléico',
        'Ácido desoxirribonucleico',
        'Ácido deborrinucleico',
      ],
      correctAnswer: 'Ácido desoxirribonucleico',
    },
    {
      title: 'K é o símbolo químico de qual elemento?',
      answersOptions: [
        'Cromo',
        'Titânio',
        'Hidrogênio',
        'Potássio',
        'Oxigênio',
      ],
      correctAnswer: 'Potássio',
    },
    {
      title:
        'Como são chamados os animais cuja a dieta é baseada exclusivamente em plantas?',
      answersOptions: [
        'Carnívoros',
        'Herbívoros',
        'Onívoros',
        'Vegetarianos',
        'Vivíparos',
      ],
      correctAnswer: 'Herbívoros',
    },
    {
      title: 'Qual o elemento químico Pb?',
      answersOptions: ['Plástico', 'Sal', 'Chumbo', 'Ouro', 'Prata'],
      correctAnswer: 'Chumbo',
    },
    {
      title: 'Qual o gás mais abundante da atmosfera?',
      answersOptions: [
        'Hidrogênio',
        'Oxigênio',
        'Nitrogênio',
        'Fósforo',
        'Pratilson',
      ],
      correctAnswer: 'Hidrogênio',
    },
    {
      title: 'Qual o gás mais abundante da atmosfera?',
      answersOptions: [
        'Hidrogênio',
        'Oxigênio',
        'Nitrogênio',
        'Fósforo',
        'Pratilson',
      ],
      correctAnswer: 'Hidrogênio',
    },
    {
      title: 'Qual o elemento mais abundante da atmosfera?',
      answersOptions: [
        'Carbono',
        'Oxigênio',
        'Nitrogênio',
        'Fósforo',
        'Plástico',
      ],
      correctAnswer: 'Carbono',
    },
    {
      title: 'Quantos elétrons tem o átomo de Hidrogênio?',
      answersOptions: ['0', '1', '2', '3', '4'],
      correctAnswer: '1',
    },
  ];
}

function getHistoryQuestions() {
  return [
    {
      title: 'Quando caiu o muro de Berlim?',
      answersOptions: ['1988', '1989', '2012', '1990', '1991'],
      correctAnswer: '1989',
    },
    {
      title: 'Quanto tempo durou a guerra dos 100 anos?',
      answersOptions: ['100', '109', '116', '98', '80'],
      correctAnswer: '116',
    },
    {
      title: 'Quem foi o primeiro presidente do Brasil?',
      answersOptions: [
        'Getúlio Vargas',
        'Deodoro da Fonseca',
        'Luís Inácio Lula da Silva',
        'Prudente de Morais',
        'Márcio Scotuzzi Jr',
      ],
      correctAnswer: 'Deodoro da Fonseca',
    },
    {
      title: 'Em que ano acabou a segunda guerra mundial?',
      answersOptions: ['1918', '1947', '1945', '1920', '2012'],
      correctAnswer: '1945',
    },
    {
      title: 'Qual era o nome original da cidade de Nova York?',
      answersOptions: [
        'Nova Amsterdã',
        'The Big Apple',
        'The Empire State',
        'Gotham',
        'Metropolis',
      ],
      correctAnswer: 'Nova Amsterdã',
    },
    {
      title: 'Qual o ano de independência do Brasil?',
      answersOptions: ['1820', '1830', '1840', '1832', '1822'],
      correctAnswer: '1822',
    },
    {
      title: 'Qual o ano da proclamação da república do Brasil?',
      answersOptions: ['1822', '1890', '1895', '1900', '1889'],
      correctAnswer: '1889',
    },
    {
      title: 'Qual o ano que Márcio Scotuzzi Jr nasceu?',
      answersOptions: ['2000', '2001', '2002', '2003', 'Nunca existiu'],
      correctAnswer: '2002',
    },
    {
      title: 'Quantas esposas teve o rei Henrique VIII?',
      answersOptions: ['2', '3', '5', '6', '10'],
      correctAnswer: '6',
    },
    {
      title: 'Qual o ano da morte da rainha Elizabeth II',
      answersOptions: ['0', '1990', '2000', '2012', '2022'],
      correctAnswer: '2022',
    },
  ];
}

function getEntertainmentQuestions() {
  return [
    {
      title: 'Que tipo de animal cria Mogli no filme homônimo?',
      answersOptions: ['Raposas', 'Ursos', 'Lobos', 'Macacos', 'Leões'],
      correctAnswer: 'Lobos',
    },
    {
      title: 'Em Matrix, qual a cor da pílula que o Neo toma?',
      answersOptions: ['Vermelha', 'Rosa', 'Roxo', 'Azul', 'Verde'],
      correctAnswer: 'Vermelha',
    },
    {
      title: 'Em os três porquinhos, de que é feita a casa mais forte?',
      answersOptions: ['Palha', 'Madeira', 'Tijolo', 'Bambu', 'Dry wall'],
      correctAnswer: 'Tijolo',
    },
    {
      title: 'Qual casa não é de Hogwarts?',
      answersOptions: [
        'Grifinória',
        'Sonserina',
        'Corvinal',
        'Lufa-Lufa',
        'Durmstrang',
      ],
      correctAnswer: 'Durmstrang',
    },
    {
      title:
        'Que continuação de filme de natal inclui a participação de Donald Trump?',
      answersOptions: [
        'Esqueceram de mim',
        'Os batutinhas',
        'Esqueceram de mim 2: perdido em Nova York',
        'Riquinho',
        'Scooby-Doo',
      ],
      correctAnswer: 'Esqueceram de mim 2: perdido em Nova York',
    },
    {
      title: 'Quantos filmes tem a saga original de star wars?',
      answersOptions: ['0', '2', '3', 'Nenhum', 'Não existe'],
      correctAnswer: '3',
    },
    {
      title: 'Qual o nome da filha de Kim Kardashian e Kanye West?',
      answersOptions: ['Jane', 'South East', 'North West', 'Apple', 'May'],
      correctAnswer: 'North West',
    },
    {
      title: 'Qual o ator principal em Indiana Jones?',
      answersOptions: [
        'Jefferson West',
        'Harry Styles',
        'Márcio Scotuzzi Jr',
        'Harrison Ford',
        'Mayson Mable',
      ],
      correctAnswer: 'Harrison Ford',
    },
    {
      title: 'Quem ganhou o oscar de melhor filme de 2014?',
      answersOptions: [
        'Doze anos de escravidão',
        'Harry Styles: Uma peça',
        'Márcio Scotuzzi Jr: Um gênio',
        'Harrison Ford: Um velho',
        'Mayson Mable: O inexistente',
      ],
      correctAnswer: 'Doze anos de escravidão',
    },
    {
      title: 'Qual o filme estrelado por Eminem?',
      answersOptions: [
        '8 mile',
        'Harry Potter',
        'Os incríveis',
        'Hannah Montana',
        'Camp Rock: O inimigo agora é outro',
      ],
      correctAnswer: '8 mile',
    },
  ];
}

function getTechQuestions() {
  return [
    {
      title: 'Qual serviço de e-mail pertence à Microsoft?',
      answersOptions: [
        'Yahoo Mail',
        'Gmail',
        'Outlook',
        'iCloud Mail',
        'Duck duck go',
      ],
      correctAnswer: 'Outlook',
    },
    {
      title:
        'Qual o nome do serviço de computação em nuvem oferecido pela Amazon?',
      answersOptions: ['Azure', 'GCP', 'AWS', 'Tencent Cloud', 'Alibaba Cloud'],
      correctAnswer: 'AWS',
    },
    {
      title: 'Qual o nome do sistema operacional criado por Linus Torvalds?',
      answersOptions: ['Windows,', 'FreeBSD', 'Linux', 'Unix', 'Chrome OS'],
      correctAnswer: 'Linux',
    },
    {
      title: 'Quem é o criador da linguagem de programação C?',
      answersOptions: [
        'Bjarne Stroustrup',
        'Guido Van Rossum',
        'Brendan Eich',
        'Dennis Ritchie',
        'Márcio Scotuzzi',
      ],
      correctAnswer: 'Dennis Ritchie',
    },
    {
      title: 'Qual animal é o mascote do banco de dados PostgreSQL?',
      answersOptions: ['Golfinho', 'Elefante', 'Raposa', 'Abelha', 'Tartaruga'],
      correctAnswer: 'Elefante',
    },
    {
      title: 'Qual o criador da microsoft?',
      answersOptions: [
        'Linus Torvalds',
        'Márcio Scotuzzi Jr',
        'Kanye West',
        'Bill Gates',
        'Isso não existe',
      ],
      correctAnswer: 'Bill Gates',
    },
    {
      title: 'Qual o criador da apple?',
      answersOptions: [
        'Steve Jobs',
        'Márcio Scotuzzi Jr',
        'Kanye West',
        'Bill Gates',
        'Isso não existe',
      ],
      correctAnswer: 'Steve Jobs',
    },
    {
      title: 'Qual o dono do twitter (Nov. 2022)?',
      answersOptions: [
        'Elon Musk',
        'Márcio Scotuzzi Jr',
        'Kanye West',
        'Bill Gates',
        'Isso não existe',
      ],
      correctAnswer: 'Elon Musk',
    },
    {
      title: 'Em que ano foi lançado o Facebook?',
      answersOptions: ['2004', '2010', '2020', '2030', '1999'],
      correctAnswer: '2004',
    },
    {
      title: 'Em que ano foi desativado o orkut?',
      answersOptions: ['2004', '2010', '2014', '2030', '1999'],
      correctAnswer: '2014',
    },
  ];
}

async function main() {
  const geography = await prisma.category.upsert({
    where: { name: 'Geografia' },
    update: {},
    create: {
      name: 'Geografia',
      questions: {
        createMany: {
          data: getGeographyQuestions(),
        },
      },
    },
  });

  const science = await prisma.category.upsert({
    where: { name: 'Ciência' },
    update: {},
    create: {
      name: 'Ciência',
      questions: {
        createMany: {
          data: getScienceQuestions(),
        },
      },
    },
  });

  const history = await prisma.category.upsert({
    where: { name: 'História' },
    update: {},
    create: {
      name: 'História',
      questions: {
        createMany: {
          data: getHistoryQuestions(),
        },
      },
    },
  });

  const entertainment = await prisma.category.upsert({
    where: { name: 'Entretenimento' },
    update: {},
    create: {
      name: 'Entretenimento',
      questions: {
        createMany: {
          data: getEntertainmentQuestions(),
        },
      },
    },
  });

  const tech = await prisma.category.upsert({
    where: { name: 'Tecnologia' },
    update: {},
    create: {
      name: 'Tecnologia',
      questions: {
        createMany: {
          data: getTechQuestions(),
        },
      },
    },
  });

  console.log({ science, history, geography, tech, entertainment });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
