const divisionData = [
  {
    divisionName: "Gold 2",
    oneMatchPerPair: false,
    numWinner: 1,
    numPrizeMoney: 0,
    numAutoPromo: 0,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "June 5, 2022",
    players: [
      "Cwiekoszczak",
      "og readmore",
      "doodle",
      "Zxvye",
      "Bergtroll",
      "sixfour",
      "TapHeist",
      "WhiteMonster"
    ]
  },
  {
    divisionName: "Gold 3",
    oneMatchPerPair: false,
    numWinner: 1,
    numPrizeMoney: 0,
    numAutoPromo: 0,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "June 26, 2022",
    players: [
      "Marts",
      "Flashmonger",
      "Diggs",
      "Grand Designs",
      "Gerhard",
      "Charlie"
    ]
  },
  {
    divisionName: "Silver 3",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "June 19, 2022",
    players: [
      "TomelloSoulMan",
      "Mario Lafleur",
      "DocPi",
      "DobREEE",
      "LovenRazu"
    ]
  },
  {
    divisionName: "Silver 4",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "July 3, 2022",
    players: [
      "Lily",
      "Maedhros",
      "Junior",
      "Frenchie",
      "BillyMac",
      "Kyira"
    ]
  },
  {
    divisionName: "Bronze 3",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    endDate: "June 5, 2022",
    players: ["Junior", "Muffyio", "careless", "Kanto", "shulphuric", "Archie"]
  },
  {
    divisionName: "Bronze 4",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    endDate: "June 19, 2022",
    players: [
      "arbaro",
      "Moon",
      "Tacomom18",
      "Richard Wolf VI",
      "pumpyheart"
    ]
  },
  {
    divisionName: "Beginner 3",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    endDate: "June 12, 2022",
    players: ["Chef", "weisbrot", "Bendelson", "Bxnshy", "tetristimer"]
  },
  {
    divisionName: "Beginner 4",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    endDate: "June 26, 2022",
    players: [
      "Odrachess",
      "Dawson",
      "Alphabet",
      "Skai",
      "TEMPHUiBIS",
      "ElleryStacks"
    ]
  }
];

const eloNames = {
  Charlie: "PASTELCHARLIE",
  Diggs: "DIGGS",
  doodle: "DOODLE",
  Gerhard: "GERHARD_ADLER",
  "Grand Designs": "GRANDDESIGNS",
  "mil0-": "MILO",
  Roman: "ANGRYRORO",
  WhiteMonster: "WHITE MONSTER",
  BillyMac: "BMAC",
  Maedhros: "MAEDHROS",
  Benfamir: "BENFAMIR",
  Peyton: "PEYTON",
  Flashmonger: "FLASHMONGER",
  TomelloSoulMan: "TOMELLO",
  Marts: "MARTS",
  Burritodad: "BURRITODAD",
  Hunn: "HUNN14",
  Frenchie: "FRENCHIESTFRIE",
  "Sleepy Samantha": "SAMANTHA",
  Lily: "SNOWLILYX",
  Junior: "JUNIOR",
  arbaro: "ARBARO",
  "Mario Lafleur": "MARIO LAFLEUR",
  mfrerck: "MFRERCK",
  "Richard Wolf VI": "RICHARD WOLF VI",
  Valid: "VALID",
  Schtoikle: "SCHTOIKLE",
  SirMaser: "SIRMASER",
  Tacomom18: "TACOMOM",
  DocPi: "DOC PI",
  YeehawMcKickass: "MCKICKASS",
  wdsubia: "WDSUBIA",
  Moon: "MOON",
  MrShadow: "MRSHADOW",
  Skai: "FRODO",
  TEMPHUiBIS: "TEMPHUIBIS",
  Dawson: "DAWSON",
  ElleryStacks: "ELLERYSTACKS",
  Odrachess: "ODRACHESS",
  "Lapis Lazuli": "LAPISLAZULI",
  Merle: "MERLE",
  Alphabet: "ALPHABETH",
  Chef: "CHEFGOBES",
  Zyxia: "ZYXIA",
  Cwiekoszczak: "CWIEKOSZCZAK",
  "og readmore": "OWEN",
  Zxvye: "ZXVYE",
  Bergtroll: "BERGTROLL",
  sixfour: "SIXFOUR",
  TapHeist: "HEIST",
  Muffyio: "MUFFYIO",
  careless: "CARELESS",
  Kanto: "KANTO",
  shulphuric: "SHULPHURIC",
  Tobs: "NOTOBIII",
  Archie: "ARCHNASH",
  weisbrot: "WEISBROT",
  Bendelson: "BENDY1",
  Bxnshy: "BXNSHY",
  tetristimer: "TETRISTIMER2000",
  LovenRazu: "LOVENRAZU",
  pumpyheart: "PUMPYHEART",
  DobREEE: "DOBRYCZLEK",
  Kyira: "KYIRA"
};

const adminRole = [
  "nikvo#1021",
  "Chobge#7764",
  "Chillalla#0001",
  "FrenchiestFrie#9778",
  "SnowLilyx#0365"
];

const restreamerRole = [
  "Richard Wolf VI#3522",
  "Benfamir#0001",
  "20Dan03#4783",
  "Alphabeth#2194",
  "Burritodad#0854",
  "Chillalla#0001",
  "Chobge#7764",
  "doodle#3414",
  "ElleryStacks#4747",
  "FrenchiestFrie#9778",
  "frodododo#8283",
  "Klystyr (UTC -6)#9595",
  "Marts#6845",
  "Mecex#6833",
  "Sleepy Samantha#8502",
  "Thunderstorm281#7715",
  "Trapzone707#2614",
  "Xenophilius#9730",
  "SirMaser#1453",
  "Deewee#7730",
  "NDDK#8648",
  "PolloSalazar#1503",
  "yeehawmckickass#4099",
  "lame mii#2430",
  "wide#5258",
  "og_readmore#6535",
  "romanplaysgames#8168",
  "Grand Designs#3638",
  "Elpailtem#2506",
  "Gabriel B#0072",
  "Micetro#8032",
  "cchristm#6938",
  "King Choke(Klystyr)(UTC -5)#9595",
  "BillyMac#8194",
  "peyton#1996",
  "Allenbot#1138",
  "Xenophilius#6969",
  "Mario Lafleur#9804",
  "DocPi314#1592",
  "sixfour#0130",
  "pumpyheart#9864",
  "MrShadow#0900",
  "Flashmonger#7095",
  "boxie3210#3078"
];

module.exports = {
  divisionData,
  adminRole,
  restreamerRole,
  eloNames
};
