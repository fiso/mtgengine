"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepwoodDrummer extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepwood Drummer", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodDrummer;
