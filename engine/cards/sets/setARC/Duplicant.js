"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duplicant extends Card {
  constructor(game) {
    super(game, "Duplicant", "Archenemy", "ARC");
  }
}

module.exports = Duplicant;
