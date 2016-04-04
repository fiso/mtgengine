"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfectiousHorror extends Card {
  constructor(game) {
    super(game, "Infectious Horror", "Archenemy", "ARC");
  }
}

module.exports = InfectiousHorror;
