"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShoreKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Shore Keeper", "Ixalan", "XLN");
  }
}

module.exports = ShoreKeeper;
