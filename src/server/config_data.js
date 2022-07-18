const divisionData = [
  {
    divisionName: "Gold 4",
    oneMatchPerPair: false,
    numWinner: 1,
    numPrizeMoney: 0,
    numAutoPromo: 0,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "July 31, 2022",
    players: [
      "Rory",
      "Cwiiis",
      "Zxvye",
      "Lily",
      "tourist106",
      "Kingsman",
      "Grand Designs",
      "doodle"
    ]
  },
  {
    divisionName: "Silver 5",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "July 17, 2022",
    players: [
      "sixfour",
      "TomelloSoulMan",
      "Mario Lafleur",
      "LovenRazu",
      "arbaro"
    ]
  },
  {
    divisionName: "Silver 6",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 1,
    endDate: "August 14, 2022",
    players: [
      "Frenchie",
      "Eumeli",
      "Maedhros",
      "sixfour",
      "Mario Lafleur",
      "BillyMac"
    ]
  },
  {
    divisionName: "Bronze 5",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    endDate: "July 17, 2022",
    players: [
      "Burritodad",
      "mfrerck",
      "Kanto",
      "Sulfato",
      "MrHaatz",
      "ElleryStacks",
      "DobREEE"
    ]
  },
  {
    divisionName: "Bronze 6",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    endDate: "July 31, 2022",
    players: [
      "Burritodad",
      "Richard Wolf VI",
      "Tacomom18",
      "Junior",
      "cchristm",
      "wdsubia"
    ]
  },
  {
    divisionName: "Bronze 7",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 1,
    numAutoRelegate: 0,
    endDate: "August 14, 2022",
    players: [
      "Bendelson",
      "YeehawMcKickass",
      "Benfamir",
      "arbaro",
      "TEMPHUiBIS",
      "Roytheredpanda",
      "Sulfato"
    ]
  },
  {
    divisionName: "Beginner 5",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    endDate: "July 17, 2022",
    players: [
      "careless",
      "Chef",
      "Vlad",
      "soapcandy",
      "MKIII Mileena",
      "Skai",
      "TEMPHUiBIS"
    ]
  },
  {
    divisionName: "Beginner 6",
    oneMatchPerPair: false,
    numWinner: 0,
    numPrizeMoney: 0,
    numAutoPromo: 1,
    numPlayoffPromo: 0,
    numPlayoffRelegate: 0,
    numAutoRelegate: 0,
    endDate: "August 14, 2022",
    players: [
      "TeaBoneJones",
      "Chef",
      "Nack323",
      "Calibrate",
      "Skai",
      "Vlad",
      "careless",
      "Lapis Lazuli"
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
  Sulfato: "SHULPHURIC",
  Tobs: "NOTOBIII",
  Archie: "ARCHNASH",
  weisbrot: "WEISBROT",
  Bendelson: "BENDY1",
  Bxnshy: "BXNSHY",
  tetristimer: "TETRISTIMER2000",
  LovenRazu: "LOVENRAZU",
  pumpyheart: "PUMPYHEART",
  DobREEE: "DOBRYCZLEK",
  Kyira: "KYIRA",
  MrHaatz: "321MRHAATZ",
  Vlad: "VLAD",
  soapcandy: "SOAPCANDY",
  "MKIII Mileena": "MKIII MILEENA",
  Rory: "RORY",
  Cwiiis: "CWIIIS",
  tourist106: "TOURIST",
  Kingsman: "KINGSMAN",
  cchristm: "CCHRISTM",
  "Eumeli": "EUMELI",
  "Roytheredpanda": "ROYTHEREDPANDA",
  "TeaBoneJones": "TEABONEJONES",
  "Nack323": "NACK323",
  "Calibrate": "CALIBRATE"
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
  "boxie3210#3078",
  "mfrerck#1934",
  "Malaya#2617",
  "BlargMeister#1337",
  "Rory#1709",
  "DanV#0061",
  "UnOr1ginalName#8655",
  "TomelloSoulMan#7863"
];

module.exports = {
  divisionData,
  adminRole,
  restreamerRole,
  eloNames
};
