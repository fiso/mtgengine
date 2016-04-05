"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DissipationField extends UnimplementedCard {
  constructor(game) {
    super(game, "Dissipation Field", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DissipationField;
