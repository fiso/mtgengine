"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RyuseitheFallingStar extends UnimplementedCard {
  constructor (game) {
    super(game, "Ryusei, the Falling Star", "Archenemy", "ARC");
  }
}

module.exports = RyuseitheFallingStar;
