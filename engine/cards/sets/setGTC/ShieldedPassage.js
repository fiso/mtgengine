"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldedPassage extends Card {
  constructor(game) {
    super(game, "Shielded Passage", "Gatecrash", "GTC");
  }
}

module.exports = ShieldedPassage;
