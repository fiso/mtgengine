"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineTransformation extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Transformation", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DivineTransformation;
