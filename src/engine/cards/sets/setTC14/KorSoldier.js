"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Soldier", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = KorSoldier;
