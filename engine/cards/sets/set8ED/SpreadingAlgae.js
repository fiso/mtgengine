"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpreadingAlgae extends Card {
  constructor(game) {
    super(game, "Spreading Algae", "Eighth Edition", "8ED");
  }
}

module.exports = SpreadingAlgae;
