"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialRay extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Ray", "Modern Masters", "MMA");
  }
}

module.exports = GlacialRay;
