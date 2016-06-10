"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulReap extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Reap", "Eventide", "EVE");
  }
}

module.exports = SoulReap;
