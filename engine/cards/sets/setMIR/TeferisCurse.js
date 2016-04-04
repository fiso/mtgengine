"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisCurse extends UnimplementedCard {
  constructor(game) {
    super(game, "Teferi's Curse", "Mirage", "MIR");
  }
}

module.exports = TeferisCurse;
