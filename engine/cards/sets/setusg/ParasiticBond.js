"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParasiticBond extends Card {
  constructor(game) {
    super(game, "Parasitic Bond", "Urza's Saga", "USG");
  }
}

module.exports = ParasiticBond;
