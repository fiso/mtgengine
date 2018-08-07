"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrashingCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Crashing Centaur", "Odyssey", "ODY");
  }
}

module.exports = CrashingCentaur;
