"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Drake", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpittingDrake;
