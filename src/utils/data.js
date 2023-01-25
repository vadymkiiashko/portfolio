const projects = [
  {
    id: 1,
    name: "bankist",
    description: "landing page for a minimalistic banking app",
    externalUrl: "https://vadymkiiashko-bankist.firebaseapp.com/",
    thumbnails: [
      "/assets/img/bankist/bankist-0.png",
      "/assets/img/bankist/bankist-1.png",
      "/assets/img/bankist/bankist-2.png",
    ],
    info: {
      about: `This is a simplistic landing page for a minimalistic online bank. It was created as a part of an online Javascrip Udemy course by Jonas Schmedtmann all credit for styling goes to him.
       All the logic was implemented by me and then checked agains the course to find a better solution or to confirm that the task was done correctly. 
       the Project uses Javascript HTML and CSS.`,
    },
  },
  {
    id: 2,
    name: "Monsters Rolodex",
    description: "Choose your monter to see more detailed information",
    externalUrl: "https://vadymkiiashko-bankist.firebaseapp.com/",
    thumbnails: [
      "/assets/img/monstersRolodex/monstersRolodex-0.png",
      "/assets/img/monstersRolodex/monstersRolodex-1.png",
      "/assets/img/monstersRolodex/monstersRolodex-2.png",
    ],
    info: {
      about: `This is a simple app theat implements basic search functionality where you can filter the list of Monsters by name. The list is instantly filtered as you type and that reflects on the Monsters that you see on your screen. 
      
      The project was created using React with useEffect hooks to fetch images and Personal information for each Monster from respective external resources. The Search component uses state to keep track of current search and filter the monsters accordingly, which in turn rerenders monsters to properly reflect the searchresults.`,
    },
  },
];

export default projects;
