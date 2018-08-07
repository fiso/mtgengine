"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IxallisKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Ixalli's Keeper", "Ixalan", "XLN");
  }
}

module.exports = IxallisKeeper;
