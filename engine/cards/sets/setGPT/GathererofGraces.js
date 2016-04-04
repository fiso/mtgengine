"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GathererofGraces extends Card {
  constructor(game) {
    super(game, "Gatherer of Graces", "Guildpact", "GPT");
  }
}

module.exports = GathererofGraces;
