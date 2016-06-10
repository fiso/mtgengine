"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonRoc extends UnimplementedCard {
  constructor (game) {
    super(game, "Crimson Roc", "Mirage", "MIR");
  }
}

module.exports = CrimsonRoc;
