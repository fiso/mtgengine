"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChubToad extends UnimplementedCard {
  constructor (game) {
    super(game, "Chub Toad", "Masters Edition", "MED");
  }
}

module.exports = ChubToad;
