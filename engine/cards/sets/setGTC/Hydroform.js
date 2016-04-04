"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hydroform extends Card {
  constructor(game) {
    super(game, "Hydroform", "Gatecrash", "GTC");
  }
}

module.exports = Hydroform;
