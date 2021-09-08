const arrOfSpeakers = [
  {
    picture: './src/page2/speaker-faces/face1.png',
    name: 'Bill',
    position: 'CEO at WEBuild',
    description: 'Ex-professor at Harvard CS50, Created WEBuild in 2009 to help people get opportunity allover the world',
  },
  {
    picture: './src/page2/speaker-faces/face2.png',
    name: 'Max',
    position: 'Senior Professor at Harvard',
    description: 'Teached in all methodological ways for over 20 years',
  },
  {
    picture: './src/page2/speaker-faces/face3.png',
    name: 'Adam',
    position: 'Career Coach at themuse',
    description: 'Helped over 10,000 people take the right decisions and get the career they wanted',
  },
  {
    picture: './src/page2/speaker-faces/face4.png',
    name: 'Selena',
    position: 'Teacher at university of british columbia',
    description: '15 years of experience and going, and major contributer to curriculum managing and planning at WEBuild',
  },
  {
    picture: './src/page2/speaker-faces/face5.png',
    name: 'Martha',
    position: 'Chef department at Indian Institute of Technology Delhi',
    description: 'Phd in Computer Science, has over 20 books on Algorithms and Data Science',
  },
  {
    picture: './src/page2/speaker-faces/face6.png',
    name: 'Fatma',
    position: 'Curriculum manager',
    description: 'A top graduate from University of liverpool, with 10 years of curriculum managing experience',
  },
];

for (let i = 0; i < arrOfSpeakers.length; i += 1) {
  const gridMainContainer = document.createElement('div');
  const flexMainContainer = document.createElement('div');
  const gridFlexContainer1 = document.createElement('div');
  const gridFlexContainer2 = document.createElement('div');
  const gridFlexContainer3 = document.createElement('div');
  const gridFlexContainer4 = document.createElement('div');
  const speakerImg = document.createElement('img');
  const speakerName = document.createElement('h2');
  const speakerPosition = document.createElement('h3');
  const speakerDescription = document.createElement('p');
  flexMainContainer.classList.add('featured-speakers-container');
  gridMainContainer.classList.add('featured-speakers-grid-container');
  document.getElementById('featured-speakers').append(flexMainContainer);
  flexMainContainer.append(gridMainContainer);

  gridFlexContainer1.classList.add('img-container');
  gridMainContainer.append(gridFlexContainer1);
  gridFlexContainer1.append(speakerImg);
  speakerImg.src = arrOfSpeakers[i].picture;

  gridFlexContainer2.classList.add('name-container');
  gridMainContainer.append(gridFlexContainer2);
  gridFlexContainer2.append(speakerName);
  speakerName.innerText = arrOfSpeakers[i].name;

  gridFlexContainer3.classList.add('position-container');
  gridMainContainer.append(gridFlexContainer3);
  gridFlexContainer3.append(speakerPosition);
  speakerPosition.innerText = arrOfSpeakers[i].position;

  gridFlexContainer4.classList.add('description-container');
  gridMainContainer.append(gridFlexContainer4);
  gridFlexContainer4.append(speakerDescription);
  speakerDescription.innerText = arrOfSpeakers[i].description;
}