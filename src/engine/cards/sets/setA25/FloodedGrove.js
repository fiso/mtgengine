"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodedGrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Flooded Grove", "Masters 25", "A25");
  }
}

module.exports = FloodedGrove;
