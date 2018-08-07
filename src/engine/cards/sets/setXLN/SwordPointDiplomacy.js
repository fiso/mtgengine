"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordPointDiplomacy extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword-Point Diplomacy", "Ixalan", "XLN");
  }
}

module.exports = SwordPointDiplomacy;
