"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatteringCraghorn extends Card {
  constructor(game) {
    super(game, "Battering Craghorn", "Archenemy", "ARC");
  }
}

module.exports = BatteringCraghorn;
