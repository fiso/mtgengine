"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvasiveSpecies extends Card {
  constructor(game) {
    super(game, "Invasive Species", "Magic 2015 Core Set", "M15");
  }
}

module.exports = InvasiveSpecies;
