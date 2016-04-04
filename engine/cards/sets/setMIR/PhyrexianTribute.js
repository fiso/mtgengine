"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianTribute extends Card {
  constructor(game) {
    super(game, "Phyrexian Tribute", "Mirage", "MIR");
  }
}

module.exports = PhyrexianTribute;
