"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Willbender extends UnimplementedCard {
  constructor (game) {
    super(game, "Willbender", "Masters 25", "A25");
  }
}

module.exports = Willbender;
