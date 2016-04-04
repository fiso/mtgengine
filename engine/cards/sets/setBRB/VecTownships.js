"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VecTownships extends Card {
  constructor(game) {
    super(game, "Vec Townships", "Battle Royale Box Set", "BRB");
  }
}

module.exports = VecTownships;
