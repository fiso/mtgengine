"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushwoodElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Rushwood Elemental", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodElemental;
