"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringMirage extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmering Mirage", "Apocalypse", "APC");
  }
}

module.exports = ShimmeringMirage;
