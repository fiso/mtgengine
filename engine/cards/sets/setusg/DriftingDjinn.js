"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DriftingDjinn extends Card {
  constructor(game) {
    super(game, "Drifting Djinn", "Urza's Saga", "USG");
  }
}

module.exports = DriftingDjinn;
