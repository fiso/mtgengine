"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoodooDoll extends UnimplementedCard {
  constructor (game) {
    super(game, "Voodoo Doll", "Chronicles", "CHR");
  }
}

module.exports = VoodooDoll;
