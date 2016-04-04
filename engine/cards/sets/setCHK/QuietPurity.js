"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuietPurity extends Card {
  constructor(game) {
    super(game, "Quiet Purity", "Champions of Kamigawa", "CHK");
  }
}

module.exports = QuietPurity;
