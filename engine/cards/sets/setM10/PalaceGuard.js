"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Palace Guard", "Magic 2010", "M10");
  }
}

module.exports = PalaceGuard;
