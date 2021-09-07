const arrOfPrograms = [
  {
    logo: './src/page2/program-logos/html.svg',
    title: 'HTML',
    description: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!',
  },
  {
    logo: './src/page2/program-logos/css.svg',
    title: 'CSS',
    description: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
  },
  {
    logo: './src/page2/program-logos/js.svg',
    title: 'JavaScript',
    description: 'JavaScript is the world\'s most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.',
  },
  {
    logo: './src/page2/program-logos/ruby.svg',
    title: 'Ruby',
    description: 'Ruby is an interpreted, high-level, general-purpose programming language. It supports multiple programming paradigms, and functional programming.',
  },
  {
    logo: './src/page2/program-logos/ror.svg',
    title: 'RoR',
    description: 'server-side web application framework written in Ruby under the MIT License.',
  },
  {
    logo: './src/page2/program-logos/react.svg',
    title: 'React',
    description: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.',
  },
  {
    logo: './src/page2/program-logos/github.svg',
    title: 'Github',
    description: 'GitHub is where over 65 million developers shape the future of software, together.',
  },
];

for (let i = 0; i < arrOfPrograms.length; i += 1) {
  const programsDIV = document.createElement('div');
  const gridFlex1 = document.createElement('div');
  const gridFlex2 = document.createElement('div');
  const gridFlex3 = document.createElement('div');
  programsDIV.classList.add('programs');
  const createImg = document.createElement('img');
  const createH1 = document.createElement('h1');
  const createP = document.createElement('p');
  document.querySelector('.programs-container').appendChild(programsDIV);
  programsDIV.appendChild(gridFlex1);
  programsDIV.appendChild(gridFlex2);
  programsDIV.appendChild(gridFlex3);
  gridFlex1.classList.add('prog-logo');
  gridFlex1.appendChild(createImg);
  createImg.src = arrOfPrograms[i].logo;
  gridFlex2.classList.add('prog-title');
  gridFlex2.appendChild(createH1);
  createH1.innerText = arrOfPrograms[i].title;
  gridFlex3.classList.add('prog-description');
  gridFlex3.appendChild(createP);
  createP.innerText = arrOfPrograms[i].description;
}
