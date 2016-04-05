"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenTailMasticore extends UnimplementedCard {
  constructor(game) {
    super(game, "Molten-Tail Masticore", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoltenTailMasticore;
