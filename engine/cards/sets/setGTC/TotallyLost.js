"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TotallyLost extends Card {
  constructor(game) {
    super(game, "Totally Lost", "Gatecrash", "GTC");
  }
}

module.exports = TotallyLost;
