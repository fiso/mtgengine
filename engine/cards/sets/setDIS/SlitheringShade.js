"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlitheringShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Slithering Shade", "Dissension", "DIS");
  }
}

module.exports = SlitheringShade;
