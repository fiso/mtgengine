"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldoftheAges extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield of the Ages", "Masters Edition", "MED");
  }
}

module.exports = ShieldoftheAges;
