"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SulfuricVapors extends Card {
  constructor(game) {
    super(game, "Sulfuric Vapors", "Urza's Saga", "USG");
  }
}

module.exports = SulfuricVapors;
