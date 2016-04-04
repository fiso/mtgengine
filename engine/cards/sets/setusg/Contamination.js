"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Contamination extends Card {
  constructor(game) {
    super(game, "Contamination", "Urza's Saga", "USG");
  }
}

module.exports = Contamination;
