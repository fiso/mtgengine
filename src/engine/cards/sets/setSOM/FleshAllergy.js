"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshAllergy extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh Allergy", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FleshAllergy;
