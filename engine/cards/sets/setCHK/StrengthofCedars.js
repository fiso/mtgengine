"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthofCedars extends Card {
  constructor(game) {
    super(game, "Strength of Cedars", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StrengthofCedars;
