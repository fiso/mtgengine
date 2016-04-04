"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonorGuard extends Card {
  constructor(game) {
    super(game, "Honor Guard", "Eighth Edition", "8ED");
  }
}

module.exports = HonorGuard;
