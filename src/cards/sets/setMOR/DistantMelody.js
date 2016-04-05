"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistantMelody extends UnimplementedCard {
  constructor(game) {
    super(game, "Distant Melody", "Morningtide", "MOR");
  }
}

module.exports = DistantMelody;
