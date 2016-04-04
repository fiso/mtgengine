"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CompleteDisregard extends Card {
  constructor(game) {
    super(game, "Complete Disregard", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CompleteDisregard;
