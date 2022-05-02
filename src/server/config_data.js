const divisionData = [
  {
    divisionName: "Gold 1",
    oneMatchPerPair: false,
    numWinner: 1,
    numPrizeMoney: 0,
    numAutoPromo: 0,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    players: [
      "Charlie",
      "Diggs",
      "doodle",
      "Gerhard",
      "Grand Designs",
      "mil0-",
      "Roman",
      "WhiteMonster"
    ]
  },
  {
    divisionName: "Silver 1",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    players: [
      "BillyMac",
      "Maedhros",
      "Benfamir",
      "Peyton",
      "Flashmonger",
      "TomelloSoulMan"
    ]
  },
  {
    divisionName: "Silver 2",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    players: [
      "Marts",
      "Burritodad",
      "Hunn",
      "Frenchie",
      "Sleepy Samantha",
      "Lily"
    ]
  },
  {
    divisionName: "Bronze 1",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    players: [
      "Junior",
      "arbaro",
      "Mario Lafleur",
      "mfrerck",
      "Richard Wolf VI",
      "Valid"
    ]
  },
  {
    divisionName: "Bronze 2",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    players: [
      "Schtoikle",
      "SirMaser",
      "Tacomom18",
      "DocPi",
      "YeehawMcKickass",
      "wdsubia"
    ]
  },
  {
    divisionName: "Beginner 1",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    players: [
      "Moon",
      "MrShadow",
      "Skai",
      "TEMPHUiBIS",
      "Dawson",
      "ElleryStacks"
    ]
  },
  {
    divisionName: "Beginner 2",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 0,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    players: ["Odrachess", "Lapis Lazuli", "Merle", "Alphabet", "Chef", "Zyxia"]
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
  Zyxia: "ZYXIA"
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
  "Micetro#8032"
];

module.exports = {
  divisionData,
  adminRole,
  restreamerRole,
  eloNames
};
