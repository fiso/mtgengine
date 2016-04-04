"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FieryMantle extends Card {
  constructor(game) {
    super(game, "Fiery Mantle", "Urza's Saga", "USG");
  }
}

module.exports = FieryMantle;
