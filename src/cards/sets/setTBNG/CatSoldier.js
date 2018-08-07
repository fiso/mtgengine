"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat Soldier", "Born of the Gods Tokens", "TBNG");
  }
}

module.exports = CatSoldier;
