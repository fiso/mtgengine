"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PharikasCure extends Card {
  constructor(game) {
    super(game, "Pharika's Cure", "Theros", "THS");
  }
}

module.exports = PharikasCure;
