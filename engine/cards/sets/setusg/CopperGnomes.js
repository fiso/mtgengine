"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopperGnomes extends Card {
  constructor(game) {
    super(game, "Copper Gnomes", "Urza's Saga", "USG");
  }
}

module.exports = CopperGnomes;
