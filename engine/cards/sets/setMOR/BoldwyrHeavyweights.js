"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoldwyrHeavyweights extends Card {
  constructor(game) {
    super(game, "Boldwyr Heavyweights", "Morningtide", "MOR");
  }
}

module.exports = BoldwyrHeavyweights;
