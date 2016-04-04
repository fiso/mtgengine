"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillerWhale extends Card {
  constructor(game) {
    super(game, "Killer Whale", "Beatdown Box Set", "BTD");
  }
}

module.exports = KillerWhale;
