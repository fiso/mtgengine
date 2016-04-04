"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KozileksSentinel extends Card {
  constructor(game) {
    super(game, "Kozilek's Sentinel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KozileksSentinel;
