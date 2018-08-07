"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Guard", "Magic 2011", "M11");
  }
}

module.exports = PalaceGuard;
