"use strict";
const Constants = require ("../../../Constants");
const HeadGamesBase = require("../set10E/HeadGames");

class HeadGames extends HeadGamesBase {
  constructor (game) {
    super(game, "Head Games", "Onslaught", "ONS");
  }
}

module.exports = HeadGames;
