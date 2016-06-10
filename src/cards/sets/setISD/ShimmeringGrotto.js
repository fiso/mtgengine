"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringGrotto extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmering Grotto", "Innistrad", "ISD");
  }
}

module.exports = ShimmeringGrotto;
