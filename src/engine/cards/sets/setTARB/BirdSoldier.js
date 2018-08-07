"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirdSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Bird Soldier", "Alara Reborn Tokens", "TARB");
  }
}

module.exports = BirdSoldier;
