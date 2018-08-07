"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SculptingSteel extends UnimplementedCard {
  constructor (game) {
    super(game, "Sculpting Steel", "Kaladesh Inventions", "MPS");
  }
}

module.exports = SculptingSteel;
