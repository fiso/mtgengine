"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaveSense extends UnimplementedCard {
  constructor (game) {
    super(game, "Cave Sense", "Mercadian Masques", "MMQ");
  }
}

module.exports = CaveSense;
