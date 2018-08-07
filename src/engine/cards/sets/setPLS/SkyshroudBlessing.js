"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshroudBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshroud Blessing", "Planeshift", "PLS");
  }
}

module.exports = SkyshroudBlessing;
