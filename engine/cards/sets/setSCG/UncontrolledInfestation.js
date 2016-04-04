"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UncontrolledInfestation extends Card {
  constructor(game) {
    super(game, "Uncontrolled Infestation", "Scourge", "SCG");
  }
}

module.exports = UncontrolledInfestation;
