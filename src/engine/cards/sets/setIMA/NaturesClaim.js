"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesClaim extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Claim", "Iconic Masters", "IMA");
  }
}

module.exports = NaturesClaim;
