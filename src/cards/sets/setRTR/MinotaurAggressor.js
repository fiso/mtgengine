"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurAggressor extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur Aggressor", "Return to Ravnica", "RTR");
  }
}

module.exports = MinotaurAggressor;
