"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QueensBaySoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Queen's Bay Soldier", "Ixalan", "XLN");
  }
}

module.exports = QueensBaySoldier;
