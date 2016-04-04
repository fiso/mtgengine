"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FathomFeeder extends Card {
  constructor(game) {
    super(game, "Fathom Feeder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FathomFeeder;
