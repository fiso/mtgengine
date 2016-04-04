"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carbonize extends Card {
  constructor(game) {
    super(game, "Carbonize", "Scourge", "SCG");
  }
}

module.exports = Carbonize;
