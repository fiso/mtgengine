"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianTribute extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Tribute", "Mirage", "MIR");
  }
}

module.exports = PhyrexianTribute;
