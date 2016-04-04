"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WayoftheThief extends Card {
  constructor(game) {
    super(game, "Way of the Thief", "Gatecrash", "GTC");
  }
}

module.exports = WayoftheThief;
