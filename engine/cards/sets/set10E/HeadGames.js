"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeadGamesBase = require("../setONS/HeadGames.js");

class HeadGames extends HeadGamesBase {
  constructor(game) {
    super(game, "Head Games", "Tenth Edition", "10E");
  }
}

module.exports = HeadGames;
