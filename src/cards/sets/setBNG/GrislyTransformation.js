"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrislyTransformation extends UnimplementedCard {
  constructor (game) {
    super(game, "Grisly Transformation", "Born of the Gods", "BNG");
  }
}

module.exports = GrislyTransformation;
