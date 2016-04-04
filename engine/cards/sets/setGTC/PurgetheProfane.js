"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PurgetheProfane extends Card {
  constructor(game) {
    super(game, "Purge the Profane", "Gatecrash", "GTC");
  }
}

module.exports = PurgetheProfane;
