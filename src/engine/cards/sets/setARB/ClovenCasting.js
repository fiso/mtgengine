"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClovenCasting extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloven Casting", "Alara Reborn", "ARB");
  }
}

module.exports = ClovenCasting;
