const arrOfSpeakers = [
  {
    picture: '../src/page2/speaker-faces/face1.png',
    name: '',
    position: '',
    description: '',
  },
  {
    picture: '../src/page2/speaker-faces/face2.png',
    name: '',
    position: '',
    description: '',
  },
  {
    picture: '../src/page2/speaker-faces/face3.png',
    name: '',
    position: '',
    description: '',
  },
  {
    picture: '../src/page2/speaker-faces/face4.png',
    name: '',
    position: '',
    description: '',
  },
  {
    picture: '../src/page2/speaker-faces/face5.png',
    name: '',
    position: '',
    description: '',
  },
  {
    picture: '../src/page2/speaker-faces/face6.png',
    name: '',
    position: '',
    description: '',
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
  const speakerName = document.createElement('h1');
  const speakerPosition = document.createElement('h2');
  const speakerDescription = document.createElement('p');
  flexMainContainer.classList.add('featured-speakers-container');
  gridMainContainer.classList.add('featured-speakers-grid-container');
  document.getElementById('featured-speakers').append(flexMainContainer);
  flexMainContainer.append(gridMainContainer);

  gridFlexContainer1.classList.add('img-container');
  gridMainContainer.append(gridFlexContainer1);
  gridFlexContainer1.append(speakerImg);

  gridFlexContainer2.classList.add('name-container');
  gridMainContainer.append(gridFlexContainer2);
  gridFlexContainer2.append(speakerName);

  gridFlexContainer3.classList.add('position-container');
  gridMainContainer.append(gridFlexContainer3);
  gridFlexContainer3.append(speakerPosition);

  gridFlexContainer4.classList.add('description-container');
  gridMainContainer.append(gridFlexContainer4);
  gridFlexContainer4.append(speakerDescription);
}