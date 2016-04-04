"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllnessintheRanks extends Card {
  constructor(game) {
    super(game, "Illness in the Ranks", "Gatecrash", "GTC");
  }
}

module.exports = IllnessintheRanks;
