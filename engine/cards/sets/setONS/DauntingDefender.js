"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauntingDefender extends Card {
  constructor(game) {
    super(game, "Daunting Defender", "Onslaught", "ONS");
  }
}

module.exports = DauntingDefender;
