"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FinalStrike extends Card {
  constructor(game) {
    super(game, "Final Strike", "Portal", "POR");
  }
}

module.exports = FinalStrike;
