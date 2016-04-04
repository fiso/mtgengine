"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiotGear extends Card {
  constructor(game) {
    super(game, "Riot Gear", "Gatecrash", "GTC");
  }
}

module.exports = RiotGear;
