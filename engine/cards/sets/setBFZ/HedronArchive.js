"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronArchive extends Card {
  constructor(game) {
    super(game, "Hedron Archive", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HedronArchive;
