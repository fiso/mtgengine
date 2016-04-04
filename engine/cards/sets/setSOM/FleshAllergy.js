"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleshAllergy extends Card {
  constructor(game) {
    super(game, "Flesh Allergy", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FleshAllergy;
