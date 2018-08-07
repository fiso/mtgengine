"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishTrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Trapper", "Vintage Masters", "VMA");
  }
}

module.exports = BenalishTrapper;
