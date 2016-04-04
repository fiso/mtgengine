"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeadGames extends Card {
  constructor(game) {
    super(game, "Head Games", "Onslaught", "ONS");
  }
}

module.exports = HeadGames;
