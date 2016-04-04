"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleshReaver extends Card {
  constructor(game) {
    super(game, "Flesh Reaver", "Urza's Saga", "USG");
  }
}

module.exports = FleshReaver;
