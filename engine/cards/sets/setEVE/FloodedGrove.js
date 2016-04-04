"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloodedGrove extends Card {
  constructor(game) {
    super(game, "Flooded Grove", "Eventide", "EVE");
  }
}

module.exports = FloodedGrove;
