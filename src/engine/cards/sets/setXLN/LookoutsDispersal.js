"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LookoutsDispersal extends UnimplementedCard {
  constructor (game) {
    super(game, "Lookout's Dispersal", "Ixalan", "XLN");
  }
}

module.exports = LookoutsDispersal;
