"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallofGemstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Hall of Gemstone", "Mirage", "MIR");
  }
}

module.exports = HallofGemstone;
