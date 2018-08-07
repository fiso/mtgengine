"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "River Merfolk", "Masters Edition", "MED");
  }
}

module.exports = RiverMerfolk;
