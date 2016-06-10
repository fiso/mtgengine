"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenerableMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Venerable Monk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VenerableMonk;
