"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProfanePrayers extends Card {
  constructor(game) {
    super(game, "Profane Prayers", "Onslaught", "ONS");
  }
}

module.exports = ProfanePrayers;
