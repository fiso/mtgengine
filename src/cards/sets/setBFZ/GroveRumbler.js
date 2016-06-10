"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroveRumbler extends UnimplementedCard {
  constructor (game) {
    super(game, "Grove Rumbler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GroveRumbler;
