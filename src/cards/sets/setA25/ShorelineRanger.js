"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShorelineRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Shoreline Ranger", "Masters 25", "A25");
  }
}

module.exports = ShorelineRanger;
