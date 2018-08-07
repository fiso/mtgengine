"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipperyBogle extends UnimplementedCard {
  constructor (game) {
    super(game, "Slippery Bogle", "Eventide", "EVE");
  }
}

module.exports = SlipperyBogle;
