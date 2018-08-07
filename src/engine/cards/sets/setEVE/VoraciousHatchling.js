"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Hatchling", "Eventide", "EVE");
  }
}

module.exports = VoraciousHatchling;
