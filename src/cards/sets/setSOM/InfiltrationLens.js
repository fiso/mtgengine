"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfiltrationLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Infiltration Lens", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InfiltrationLens;
