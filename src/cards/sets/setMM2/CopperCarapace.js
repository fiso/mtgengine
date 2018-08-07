"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperCarapace extends UnimplementedCard {
  constructor (game) {
    super(game, "Copper Carapace", "Modern Masters 2015", "MM2");
  }
}

module.exports = CopperCarapace;
