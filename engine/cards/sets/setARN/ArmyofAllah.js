"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmyofAllah extends Card {
  constructor(game) {
    super(game, "Army of Allah", "Arabian Nights", "ARN");
  }
}

module.exports = ArmyofAllah;
