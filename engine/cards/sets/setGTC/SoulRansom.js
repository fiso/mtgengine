"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulRansom extends Card {
  constructor(game) {
    super(game, "Soul Ransom", "Gatecrash", "GTC");
  }
}

module.exports = SoulRansom;
