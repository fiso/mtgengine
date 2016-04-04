"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrypticCruiser extends Card {
  constructor(game) {
    super(game, "Cryptic Cruiser", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CrypticCruiser;
