"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoodooDoll extends UnimplementedCard {
  constructor (game) {
    super(game, "Voodoo Doll", "Masters Edition III", "ME3");
  }
}

module.exports = VoodooDoll;
