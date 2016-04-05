"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimeofNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Chime of Night", "Urza's Destiny", "UDS");
  }
}

module.exports = ChimeofNight;
