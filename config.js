// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Avichal!',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'So jao ',

  // Weather
  weatherKey: 'd1d5ccc07cddda2a6d1341438fa5011c', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '28.527334',
  defaultLongitude: '77.151543',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'GMail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Spotify',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '4',
      name: 'WhatsApp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'meh',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'tv',
  secondListIcon: 'pen-tool',

  // Links
  lists: {
    firstList: [
      {
        name: 'Amazon',
        link: 'http://amazon.in/',
      },
      {
        name: 'PrimeVideo',
        link: 'http://primevideo.com/',
      },
      {
        name: 'MyAnimeList',
        link: 'https://myanimelist.net/animelist/Noob_Avichal',
      },
      {
        name: 'GogoAnime',
        link: 'https://gogoanime.cm',
      },
      {
        name: 'Discord',
        link: 'https://discord.com/channels/@me',
      },
    ],
    secondList: [
      {
        name: 'Microsoft Teams',
        link: 'https://teams.microsoft.com/_#/school//?ctx=teamsGrid',
      },
      {
        name: 'Notion',
        link: 'https://www.notion.so/avichal/',
      },
      {
        name: 'Duolingo',
        link: 'https://www.duolingo.com/learn',
      },
      {
        name: 'Google Drive',
        link: 'https://drive.google.com/',
      },
      {
        name: 'Visual Studio Code',
        link: 'https://vscode.dev',
      },
    ],
  },
};
