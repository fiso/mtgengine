"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CribSwap extends Card {
  constructor(game) {
    super(game, "Crib Swap", "Commander 2015", "C15");
  }
}

module.exports = CribSwap;
