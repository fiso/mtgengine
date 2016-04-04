"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartialGlory extends Card {
  constructor(game) {
    super(game, "Martial Glory", "Gatecrash", "GTC");
  }
}

module.exports = MartialGlory;
