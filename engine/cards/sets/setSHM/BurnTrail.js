"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurnTrail extends Card {
  constructor(game) {
    super(game, "Burn Trail", "Shadowmoor", "SHM");
  }
}

module.exports = BurnTrail;
