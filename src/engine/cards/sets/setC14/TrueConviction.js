"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrueConviction extends UnimplementedCard {
  constructor (game) {
    super(game, "True Conviction", "Commander 2014", "C14");
  }
}

module.exports = TrueConviction;
