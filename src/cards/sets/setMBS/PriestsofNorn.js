"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestsofNorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Priests of Norn", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PriestsofNorn;
