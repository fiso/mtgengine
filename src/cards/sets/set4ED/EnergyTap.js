"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyTap extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Tap", "Fourth Edition", "4ED");
  }
}

module.exports = EnergyTap;
