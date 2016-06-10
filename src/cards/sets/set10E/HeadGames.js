"use strict";
const Constants = require ("../../../Constants");
const HeadGamesBase = require("../setONS/HeadGames");

class HeadGames extends HeadGamesBase {
  constructor (game) {
    super(game, "Head Games", "Tenth Edition", "10E");
  }
}

module.exports = HeadGames;
