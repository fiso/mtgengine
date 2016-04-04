"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfiltrationLens extends Card {
  constructor(game) {
    super(game, "Infiltration Lens", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InfiltrationLens;
