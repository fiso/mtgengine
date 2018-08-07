"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrarksThumb extends UnimplementedCard {
  constructor (game) {
    super(game, "Krark's Thumb", "Mirrodin", "MRD");
  }
}

module.exports = KrarksThumb;
