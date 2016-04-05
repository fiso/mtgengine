"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDenial extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Denial", "Alara Reborn", "ARB");
  }
}

module.exports = WallofDenial;
