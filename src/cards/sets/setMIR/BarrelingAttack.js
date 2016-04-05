"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrelingAttack extends UnimplementedCard {
  constructor(game) {
    super(game, "Barreling Attack", "Mirage", "MIR");
  }
}

module.exports = BarrelingAttack;
