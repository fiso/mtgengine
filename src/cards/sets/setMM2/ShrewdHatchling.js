"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrewdHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrewd Hatchling", "Modern Masters 2015", "MM2");
  }
}

module.exports = ShrewdHatchling;
