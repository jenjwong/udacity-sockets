import bandsNearby from './images/bandsNearbyLogo.svg';
import britechartsMobile from './images/britecharts-mobile.png';
import trafficMobile from './images/traffic-mobile.png';

export const projectData =
  [
    { id: 'bands-nearby', title: 'Bands Nearby', src: bandsNearby, url: 'http://beta.bandsnearby.com/', description: 'React/Redux, Node.js' },
    { id: 'britecharts', title: '', src: britechartsMobile, url: 'https://github.com/eventbrite/britecharts/pull/267', description: 'React/Redux, Node.js' },
    { id: 'traffic', title: 'Animated Adobe Creative Suite', url: 'https://jenjwong.github.io/create-svg-and-animate/', src: trafficMobile },
  ];

export const introText = loggedInUser => ({
  0: { created: 0, user: `${loggedInUser}`, text: 'Hey Jen, nice site. I like the adaptive design!', timing: 400 },
  1: { created: 1, text: 'Thanks, I was inpired by Udacity\'s Front-End Nanodegree!', timing: 1100 },
  2: { created: 2, user: `${loggedInUser}`, text: 'Udacity is awesome!', timing: 500 },
  3: { created: 3, text: 'Yes! I can\'t believe how accessible they make education!', timing: 1200 },
  4: { user: `${loggedInUser}`, text: 'So is this a real chat or is it just a little fancy css spiced up with some setTimeouts?', timing: 600 },
  5: { text: 'It\'s a functional chat, built with Socket.IO! And the website is made with React. I saw Udacity was looking for engineers who used sockets and I couldn\'t contain my excitment!', timing: 1000 },
});

export const typistConfig1 = {
  startDelay: 500,
  cursor: {
    show: false,
    blink: true,
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  },
};

export const typistConfig2 = {
  startDelay: 1500,
  cursor: {
    show: false,
    blink: true,
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  },
};
