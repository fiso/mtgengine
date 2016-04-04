"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncontrolledInfestation extends UnimplementedCard {
  constructor(game) {
    super(game, "Uncontrolled Infestation", "Scourge", "SCG");
  }
}

module.exports = UncontrolledInfestation;
