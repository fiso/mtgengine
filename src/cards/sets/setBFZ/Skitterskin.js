"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skitterskin extends UnimplementedCard {
  constructor (game) {
    super(game, "Skitterskin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Skitterskin;
