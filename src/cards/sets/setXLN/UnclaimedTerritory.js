"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnclaimedTerritory extends UnimplementedCard {
  constructor (game) {
    super(game, "Unclaimed Territory", "Ixalan", "XLN");
  }
}

module.exports = UnclaimedTerritory;
