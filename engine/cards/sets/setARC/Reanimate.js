"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reanimate extends Card {
  constructor(game) {
    super(game, "Reanimate", "Archenemy", "ARC");
  }
}

module.exports = Reanimate;
