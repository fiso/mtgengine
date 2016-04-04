"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Teferi's Imp", "Mirage", "MIR");
  }
}

module.exports = TeferisImp;
