"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindObedience extends Card {
  constructor(game) {
    super(game, "Blind Obedience", "Gatecrash", "GTC");
  }
}

module.exports = BlindObedience;
