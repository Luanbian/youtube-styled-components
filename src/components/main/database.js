const database = [
  {
    title: 'O que significa Rocketseat?',
    image: <img className="card-image" alt="thumb" src="./img/thumbrocketseat.jpg"/>,
    time: '22:23',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/rocket.jpg" />,
    name: 'Rocketseat',
    vistime: '35,2 mil visualizações . há 9 meses'
  },
  {
    title: 'Respondendo perguntas sobre programação',
    image: <img className="card-image" alt="thumb" src="./img/felipethumb.jpg"/>,
    time: '08:12',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconfilipe.png" />,
    name: 'Filipe Deschamps',
    vistime: '55 mil visualizações . há 1 ano'
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    image: <img className="card-image" alt="thumb" src="./img/lofithumb.jpg"/>,
    time: '01:05:30',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/lofithumb.jpg" />,
    name: 'Lofi Girl',
    vistime: '5,2 mil visualizações . há 1 ano'
  },
  {
    title: 'Curso python #01 - Seja um programador',
    image: <img className="card-image" alt="thumb" src="./img/gustavothumb.jpg"/>,
    time: '29:07',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconcurso.jpg" />,
    name: 'Curso em vídeo',
    vistime: '3,8 mil visualizações . há 4 anos'
  },
  {
    title: 'Como escrever HTML 50% mais rápido no VS Code',
    image: <img className="card-image" alt="thumb" src="./img/thumbcdfd.jpg"/>,
    time: '07:57',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconcdf.jpg" />,
    name: 'Código Fonte TV',
    vistime: '31,5 mil visualizações . há 1 ano'
  },
  {
    title: 'Clonando interface do Nubank com React Native',
    image: <img className="card-image" alt="thumb" src="./img/nubankthumb.jpg"/>,
    time: '01:13:21',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/rocket.jpg" />,
    name: 'Rocketseat',
    vistime: '259 mil visualizações . há 2 anos'
  },
  {
    title: 'Asynchronous Javascript',
    image: <img className="card-image" alt="thumb" src="./img/asyncthumb.jpg"/>,
    time: '13:55',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconjames.jpg" />,
    name: 'James Q Quick',
    vistime: '46,5 mil visualizações . há 7 meses'
  },
  {
    title: 'O que estudar para se tornar dev front-end?',
    image: <img className="card-image" alt="thumb" src="./img/sujeitothumb.jpg"/>,
    time: '13:27',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconsujeito.jfif" />,
    name: 'Sujeito programador',
    vistime: '578 visualizações . há 1 dia'
  },
  {
    title: 'Minha carteira de trabalho como dev Júnior',
    image: <img className="card-image" alt="thumb" src="./img/lucasthumb.jpg"/>,
    time: '15:01',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconlucas.jpg" />,
    name: 'Lucas Montano',
    vistime: '11,3 mil visualizações . há 1 mês'
  },
  {
    title: 'Como é o verão na Alemanha',
    image: <img className="card-image" alt="thumb" src="./img/alemanizandothumb.jfif"/>,
    time: '16:29',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconalemanizando.png" />,
    name: 'Alemanizando',
    vistime: '28,6 mil visualizações . há 8 meses'
  },
  {
    title: 'Curso de C# - Aprenda o essencial em 5 HORAS',
    image: <img className="card-image" alt="thumb" src="./img/victorthumb.jpg"/>,
    time: '05:00:01',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconvictor.jfif" />,
    name: 'Guia do programador',
    vistime: '115 mil visualizações . há 9 meses'
  },
  {
    title: "Don't Be A Programmer ",
    image: <img className="card-image" alt="thumb" src="./img/jomathumb.jpg"/>,
    time: '03:45',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconjoma.jpg" />,
    name: 'Joma Tech',
    vistime: '2,71 mil visualizações . há 3 anos'
  },
  {
    title: "Recriaram o jogo pedra papel tesoura c/ Python",
    image: <img className="card-image" alt="thumb" src="./img/devthumb.jpg"/>,
    time: '30:18',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/devicon.jpg" />,
    name: 'Dev Aprender',
    vistime: '1,14 mil visualizações . há 1 ano'
  },
  {
    title: "IA estacionando carros",
    image: <img className="card-image" alt="thumb" src="./img/unithumb.jpg"/>,
    time: '15:38',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/uniicon.jpg" />,
    name: 'Universo Programado',
    vistime: '1,69 mil visualizações . há 8 meses'
  },
  {
    title: "A brief history of chess",
    image: <img className="card-image" alt="thumb" src="./img/chessthumb.jpg"/>,
    time: '05:40',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/iconted.jpg" />,
    name: 'TED-Ed',
    vistime: '5,24 mil visualizações . há 2 anos'
  },
  {
    title: "You can learn anything",
    image: <img className="card-image" alt="thumb" src="./img/khanthumb.jpg"/>,
    time: '01:31',
    imageicon: <img  className="card-icon" alt="icone-do-canal" src="./img/khanicon.jpg" />,
    name: 'Khan academy',
    vistime: '7,08 mil visualizações . há 7 anos'
  },
]
  
export default database;