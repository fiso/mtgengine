"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkforDeath extends Card {
  constructor(game) {
    super(game, "Mark for Death", "Gatecrash", "GTC");
  }
}

module.exports = MarkforDeath;
