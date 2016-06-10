"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncheckedGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Unchecked Growth", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = UncheckedGrowth;
