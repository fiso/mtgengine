"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RampantElephant extends Card {
  constructor(game) {
    super(game, "Rampant Elephant", "Invasion", "INV");
  }
}

module.exports = RampantElephant;
