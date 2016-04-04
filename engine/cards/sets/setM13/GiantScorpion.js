"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantScorpion extends Card {
  constructor(game) {
    super(game, "Giant Scorpion", "Magic 2013", "M13");
  }
}

module.exports = GiantScorpion;
