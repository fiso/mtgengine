"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrestleTroll extends Card {
  constructor(game) {
    super(game, "Trestle Troll", "Return to Ravnica", "RTR");
  }
}

module.exports = TrestleTroll;
