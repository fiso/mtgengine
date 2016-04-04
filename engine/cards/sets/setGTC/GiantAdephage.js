"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantAdephage extends Card {
  constructor(game) {
    super(game, "Giant Adephage", "Gatecrash", "GTC");
  }
}

module.exports = GiantAdephage;
