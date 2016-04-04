"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunClasp extends Card {
  constructor(game) {
    super(game, "Sun Clasp", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SunClasp;
