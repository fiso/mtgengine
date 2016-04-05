"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParasiticBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Parasitic Bond", "Urza's Saga", "USG");
  }
}

module.exports = ParasiticBond;
