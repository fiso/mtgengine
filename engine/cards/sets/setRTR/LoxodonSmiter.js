"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonSmiter extends Card {
  constructor(game) {
    super(game, "Loxodon Smiter", "Return to Ravnica", "RTR");
  }
}

module.exports = LoxodonSmiter;
