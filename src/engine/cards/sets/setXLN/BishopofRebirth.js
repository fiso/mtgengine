"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BishopofRebirth extends UnimplementedCard {
  constructor (game) {
    super(game, "Bishop of Rebirth", "Ixalan", "XLN");
  }
}

module.exports = BishopofRebirth;
