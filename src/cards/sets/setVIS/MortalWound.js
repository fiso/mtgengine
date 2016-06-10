"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalWound extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortal Wound", "Visions", "VIS");
  }
}

module.exports = MortalWound;
