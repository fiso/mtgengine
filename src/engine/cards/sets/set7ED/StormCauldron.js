"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormCauldron extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Cauldron", "Seventh Edition", "7ED");
  }
}

module.exports = StormCauldron;
