//const ObjectId = require("mongodb").ObjectId;

const memeDivisionData = [
  {
    divisionName: "1.3m",
    numWinner: 1,
    numAutoPromo: 0,
    numSoftPromo: 0,
    numSoftRelegate: 1,
    numHardRelegate: 1,
    players: [
      "adammts",
      "mohammad",
      "batfoy",
      "hydrantdude",
      "brodin",
      "beastinshen",
      "cheez_fish"
    ],
    standings: [
      {
        name: "greg",
        mp: 12,
        wins: 12,
        losses: 0,
        gf: 36,
        ga: 1,
        gd: 36,
        points: 48
      },
      {
        name: "jdmfx_",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 1,
        ga: 6,
        gd: -5,
        points: 1
      },
      {
        name: "jonas",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "vst_koryan",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "greentea",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "boom_jeff",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "buuuuuuuuco",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      }
    ]
  },
  {
    divisionName: "1.3m",
    numWinner: 1,
    numAutoPromo: 0,
    numSoftPromo: 0,
    numSoftRelegate: 1,
    numHardRelegate: 1,
    players: [
      "adammts",
      "mohammad",
      "batfoy",
      "hydrantdude",
      "brodin",
      "beastinshen",
      "cheez_fish"
    ],
    standings: [
      {
        name: "greg",
        mp: 12,
        wins: 12,
        losses: 0,
        gf: 36,
        ga: 1,
        gd: 36,
        points: 48
      },
      {
        name: "jdmfx_",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 1,
        ga: 6,
        gd: -5,
        points: 1
      },
      {
        name: "jonas",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "vst_koryan",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "greentea",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "boom_jeff",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      },
      {
        name: "buuuuuuuuco",
        mp: 2,
        wins: 0,
        losses: 2,
        gf: 0,
        ga: 6,
        gd: -6,
        points: 0
      }
    ]
  }
];

// const sampleMatchData = [
//   {
//     _id: ObjectId("5e0cf031963a5bb7c0c617b5"),
//     division: "2",
//     winner: "phamtom",
//     loser: "moodeuce",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617b6"),
//     division: "2",
//     winner: "moodeuce",
//     loser: "phamtom",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617b7"),
//     division: "2",
//     winner: "moodeuce",
//     loser: "galoomba",
//     winner_games: 3,
//     loser_games: 1
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617b8"),
//     division: "2",
//     winner: "phamtom",
//     loser: "b14nk",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617b9"),
//     division: "2",
//     winner: "tristop",
//     loser: "b14nk",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617ba"),
//     division: "2",
//     winner: "jakegames2",
//     loser: "b14nk",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617bb"),
//     division: "2",
//     winner: "moodeuce",
//     loser: "b14nk",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617bc"),
//     division: "2",
//     winner: "galoomba",
//     loser: "b14nk",
//     winner_games: 3,
//     loser_games: 0
//   },
//   /* Artificial example to confirm GD can break ties
//     adammts - 4 pts, GD 1
//     mohammad - 4 pts, GD 2
//     */
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617bd"),
//     division: "1",
//     winner: "adammts",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617be"),
//     division: "1",
//     winner: "mohammad",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 1
//   },
//    Artificial example to confirm MW can break ties
//      batfoy: 3-0 2-3 2-3 3-2,  12 pts, GD 2, 2 MW
//      hydrant: 3-2 3-2 0-3 3-0,  12 pts, GD 2, 3 MW

//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617bf"),
//     division: "1",
//     winner: "batfoy",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c0"),
//     division: "1",
//     winner: "beastinshen",
//     loser: "batfoy",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c1"),
//     division: "1",
//     winner: "brodin",
//     loser: "batfoy",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c2"),
//     division: "1",
//     winner: "batfoy",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c3"),
//     division: "1",
//     winner: "hydrantdude",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c4"),
//     division: "1",
//     winner: "hydrantdude",
//     loser: "beastinshen",
//     winner_games: 3,
//     loser_games: 2
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c5"),
//     division: "1",
//     winner: "brodin",
//     loser: "hydrantdude",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0cf07e963a5bb7c0c617c6"),
//     division: "1",
//     winner: "hydrantdude",
//     loser: "cheez_fish",
//     winner_games: 3,
//     loser_games: 0
//   },
//   {
//     _id: ObjectId("5e0e949a03d98f13ec3e2dc7"),
//     division: "1",
//     winner: "brodin",
//     loser: "hydrantdude",
//     winner_games: 3,
//     loser_games: 2,
//     winner_home: true
//   },
//   {
//     _id: ObjectId("5e0e94c103d98f13ec3e2dc8"),
//     division: "1",
//     winner: "brodin",
//     loser: "hydrantdude",
//     winner_games: 3,
//     loser_games: 1,
//     winner_home: true
//   }
// ];

const sampleMatchData = [
  {
    division: "2",
    winner: "phamtom",
    loser: "moodeuce",
    winner_games: 3,
    loser_games: 0,
    winner_home: true
  },
  {
    division: "2",
    winner: "moodeuce",
    loser: "phamtom",
    winner_games: 3,
    loser_games: 2,
    winner_home: false
  },
  {
    division: "2",
    winner: "moodeuce",
    loser: "galoomba",
    winner_games: 3,
    loser_games: 1,
    winner_home: true
  },
  {
    division: "2",
    winner: "phamtom",
    loser: "b14nk",
    winner_games: 3,
    loser_games: 0,
    winner_home: true
  },
  {
    division: "2",
    winner: "tristop",
    loser: "b14nk",
    winner_games: 3,
    loser_games: 0,
    winner_home: false
  },
  {
    division: "2",
    winner: "jakegames2",
    loser: "b14nk",
    winner_games: 3,
    loser_games: 0,
    winner_home: false
  },
  {
    division: "2",
    winner: "moodeuce",
    loser: "b14nk",
    winner_games: 3,
    loser_games: 0,
    winner_home: true
  },
  {
    division: "2",
    winner: "galoomba",
    loser: "b14nk",
    winner_games: 3,
    loser_games: 0,
    winner_home: false
  },
  /* Artificial example to confirm GD can break ties
    adammts - 4 pts, GD 1
    mohammad - 4 pts, GD 2
    */
  {
    division: "1",
    winner: "adammts",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "mohammad",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 1
  },
  /* Artificial example to confirm MW can break ties
     batfoy: 3-0 2-3 2-3 3-2,  12 pts, GD 2, 2 MW
     hydrant: 3-2 3-2 0-3 3-0,  12 pts, GD 2, 3 MW
     */
  {
    division: "1",
    winner: "batfoy",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 0
  },
  {
    division: "1",
    winner: "beastinshen",
    loser: "batfoy",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "brodin",
    loser: "batfoy",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "batfoy",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "hydrantdude",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "hydrantdude",
    loser: "beastinshen",
    winner_games: 3,
    loser_games: 2
  },
  {
    division: "1",
    winner: "brodin",
    loser: "hydrantdude",
    winner_games: 3,
    loser_games: 0
  },
  {
    division: "1",
    winner: "hydrantdude",
    loser: "cheez_fish",
    winner_games: 3,
    loser_games: 0
  }
];

function countMatchesPlayed(playerName1, playerName2, divMatches) {
  let count = 0;
  for (let i = 0; i < divMatches.length; i++) {
    const match = divMatches[i];
    if (
      (match.winner === playerName1 && match.loser === playerName2) ||
      (match.loser === playerName1 && match.winner === playerName2)
    ) {
      count += 1;
    }
  }
  return count;
}

function getMatchSchedule(division, divMatches) {
  const matchSchedule = [];

  // Get all matchups
  for (let i = 0; i < division.players.length; i++) {
    for (let j = 0; j < division.players.length; j++) {
      const playerName1 = division.players[i];
      const playerName2 = division.players[j];
      // Toss out matches vs. yourself or not in alphabetical order (to not double count)
      if (playerName1 >= playerName2) {
        continue;
      }

      // Check how many matches that pair has played
      const numLeftToPlay =
        2 - countMatchesPlayed(playerName1, playerName2, divMatches);
      for (let k = 0; k < numLeftToPlay; k++) {
        matchSchedule.push({ playerName1, playerName2 });
      }
    }
  }

  return matchSchedule;
}

/* Comparison function for sorting the players 
   Official ordering according to moodeuce is "GD>MW>GF>H2H>some other thing"
   This function will sort according to Points > GD > MW > GF, then there has to be
   human intervention for the rest.
*/
function compareRaw(player1, player2) {
  // console.log("Comparing", player1.name, player2.name);
  // Higher score first
  if (player2.points !== player1.points) {
    // console.log("points:", player1.points, player2.points);
    return player2.points - player1.points;
  }
  // Higher GD first
  if (player2.gd !== player1.gd) {
    // console.log("gd:", player1.gd, player2.gd);
    return player2.gd - player1.gd;
  }
  // Higher Matches Won first
  if (player2.wins !== player1.wins) {
    // console.log("wins:", player1.wins, player2.wins);
    return player2.wins - player1.wins;
  }
  // Higher GF first
  if (player2.gf !== player1.gf) {
    return player2.gf - player1.gf;
  }
}

/* Comparison function to sort players based on their simulation data. */
function compareSimulated(player1, player2) {
  // If their promo chances differ (after they were rounded to 1%), sort based on that
  if (player2.promoChance !== player1.promoChance) {
    return player2.promoChance - player1.promoChance;
  }

  // Likewise with relegation (but BACKWARDS because lower is better)
  if (player2.relegationChance !== player1.relegationChance) {
    return player1.relegationChance - player2.relegationChance;
  }

  // Otherwise sort by current points
  return compareRaw(player1, player2);
}

/* Do an O(n) filter to get a player from the list 
(there are never many players or many matches so the complexity doesn't matter) */
function getPlayerData(list, playerName) {
  for (let p = 0; p < list.length; p++) {
    const player = list[p];
    if (player.name === playerName) {
      return player;
    }
  }
  console.log("Unable to find player ", playerName, "in list:\n", list);
}

function getApiUrl(suffix) {
  return (process.env.API_URL || "http://localhost:8080") + "/" + suffix;
}

module.exports = {
  memeDivisionData,
  sampleMatchData,
  compareRaw,
  compareSimulated,
  getPlayerData,
  getMatchSchedule,
  getApiUrl
};
