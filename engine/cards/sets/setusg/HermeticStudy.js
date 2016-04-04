"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HermeticStudy extends Card {
  constructor(game) {
    super(game, "Hermetic Study", "Urza's Saga", "USG");
  }
}

module.exports = HermeticStudy;
