"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OblivionRing extends Card {
  constructor(game) {
    super(game, "Oblivion Ring", "Archenemy", "ARC");
  }
}

module.exports = OblivionRing;
