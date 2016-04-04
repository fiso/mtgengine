"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaticChasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Magmatic Chasm", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MagmaticChasm;
