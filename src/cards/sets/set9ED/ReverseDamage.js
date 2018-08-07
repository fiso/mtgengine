"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReverseDamage extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverse Damage", "Ninth Edition", "9ED");
  }
}

module.exports = ReverseDamage;
