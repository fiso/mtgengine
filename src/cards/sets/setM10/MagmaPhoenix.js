"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Phoenix", "Magic 2010", "M10");
  }
}

module.exports = MagmaPhoenix;
