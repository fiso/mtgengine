"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opposition extends UnimplementedCard {
  constructor (game) {
    super(game, "Opposition", "Seventh Edition", "7ED");
  }
}

module.exports = Opposition;
