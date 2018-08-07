"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineTransformation extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Transformation", "Masters Edition", "MED");
  }
}

module.exports = DivineTransformation;
