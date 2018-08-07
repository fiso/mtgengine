"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraftedWargear extends UnimplementedCard {
  constructor (game) {
    super(game, "Grafted Wargear", "Fifth Dawn", "5DN");
  }
}

module.exports = GraftedWargear;
