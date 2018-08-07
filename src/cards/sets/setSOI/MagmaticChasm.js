"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaticChasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Magmatic Chasm", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagmaticChasm;
