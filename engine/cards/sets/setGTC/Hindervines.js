"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hindervines extends Card {
  constructor(game) {
    super(game, "Hindervines", "Gatecrash", "GTC");
  }
}

module.exports = Hindervines;
