"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Earth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpittingEarth;
