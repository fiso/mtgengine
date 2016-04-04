"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnstableFrontier extends Card {
  constructor(game) {
    super(game, "Unstable Frontier", "Conflux", "CON");
  }
}

module.exports = UnstableFrontier;
