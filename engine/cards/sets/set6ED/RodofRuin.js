"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RodofRuin extends Card {
  constructor(game) {
    super(game, "Rod of Ruin", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RodofRuin;
