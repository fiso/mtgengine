"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastThoughts extends Card {
  constructor(game) {
    super(game, "Last Thoughts", "Gatecrash", "GTC");
  }
}

module.exports = LastThoughts;
