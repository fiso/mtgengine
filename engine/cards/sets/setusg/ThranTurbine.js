"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranTurbine extends UnimplementedCard {
  constructor(game) {
    super(game, "Thran Turbine", "Urza's Saga", "USG");
  }
}

module.exports = ThranTurbine;
