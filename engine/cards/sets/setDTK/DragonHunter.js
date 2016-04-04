"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonHunter extends Card {
  constructor(game) {
    super(game, "Dragon Hunter", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonHunter;
