"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Raze extends Card {
  constructor(game) {
    super(game, "Raze", "Urza's Saga", "USG");
  }
}

module.exports = Raze;
