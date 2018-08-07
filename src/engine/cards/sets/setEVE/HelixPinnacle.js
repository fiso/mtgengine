"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelixPinnacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Helix Pinnacle", "Eventide", "EVE");
  }
}

module.exports = HelixPinnacle;
