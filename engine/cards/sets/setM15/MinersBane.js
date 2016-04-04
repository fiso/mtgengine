"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinersBane extends Card {
  constructor(game) {
    super(game, "Miner's Bane", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MinersBane;
