"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialRay extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Ray", "Arena League", "pARL");
  }
}

module.exports = GlacialRay;
