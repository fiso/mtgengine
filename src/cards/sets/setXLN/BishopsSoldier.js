"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BishopsSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Bishop's Soldier", "Ixalan", "XLN");
  }
}

module.exports = BishopsSoldier;
