"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranTurbine extends Card {
  constructor(game) {
    super(game, "Thran Turbine", "Urza's Saga", "USG");
  }
}

module.exports = ThranTurbine;
