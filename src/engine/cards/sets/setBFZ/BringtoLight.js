"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BringtoLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bring to Light", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BringtoLight;
