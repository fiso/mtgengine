"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CovetedPeacock extends UnimplementedCard {
  constructor (game) {
    super(game, "Coveted Peacock", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CovetedPeacock;
