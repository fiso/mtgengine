"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalCombat extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortal Combat", "Tenth Edition", "10E");
  }
}

module.exports = MortalCombat;
