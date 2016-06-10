"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Strength", "Collector's Edition", "CED");
  }
}

module.exports = HolyStrength;
