"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoxiousHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Noxious Hatchling", "Eventide", "EVE");
  }
}

module.exports = NoxiousHatchling;
