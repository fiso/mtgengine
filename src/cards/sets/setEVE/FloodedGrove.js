"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodedGrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Flooded Grove", "Eventide", "EVE");
  }
}

module.exports = FloodedGrove;
