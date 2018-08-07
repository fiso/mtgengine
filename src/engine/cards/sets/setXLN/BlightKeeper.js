"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Blight Keeper", "Ixalan", "XLN");
  }
}

module.exports = BlightKeeper;
