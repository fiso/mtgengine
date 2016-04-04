"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonWhisperer extends Card {
  constructor(game) {
    super(game, "Dragon Whisperer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonWhisperer;
