"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquirmingMass extends Card {
  constructor(game) {
    super(game, "Squirming Mass", "Urza's Destiny", "UDS");
  }
}

module.exports = SquirmingMass;
