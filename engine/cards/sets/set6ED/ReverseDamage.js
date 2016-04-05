"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReverseDamage extends UnimplementedCard {
  constructor(game) {
    super(game, "Reverse Damage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ReverseDamage;
