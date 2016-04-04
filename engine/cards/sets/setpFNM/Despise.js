"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Despise extends Card {
  constructor(game) {
    super(game, "Despise", "Friday Night Magic", "pFNM");
  }
}

module.exports = Despise;
