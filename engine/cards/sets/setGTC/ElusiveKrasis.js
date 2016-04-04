"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElusiveKrasis extends Card {
  constructor(game) {
    super(game, "Elusive Krasis", "Gatecrash", "GTC");
  }
}

module.exports = ElusiveKrasis;
