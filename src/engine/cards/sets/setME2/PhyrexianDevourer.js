"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDevourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Devourer", "Masters Edition II", "ME2");
  }
}

module.exports = PhyrexianDevourer;
