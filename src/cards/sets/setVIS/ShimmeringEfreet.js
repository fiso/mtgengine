"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringEfreet extends UnimplementedCard {
  constructor(game) {
    super(game, "Shimmering Efreet", "Visions", "VIS");
  }
}

module.exports = ShimmeringEfreet;
