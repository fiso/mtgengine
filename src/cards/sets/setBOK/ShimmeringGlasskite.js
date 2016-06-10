"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringGlasskite extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmering Glasskite", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShimmeringGlasskite;
