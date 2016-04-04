"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinotaurAggressor extends Card {
  constructor(game) {
    super(game, "Minotaur Aggressor", "Return to Ravnica", "RTR");
  }
}

module.exports = MinotaurAggressor;
