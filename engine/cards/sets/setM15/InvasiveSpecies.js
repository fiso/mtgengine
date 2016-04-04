"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvasiveSpecies extends UnimplementedCard {
  constructor(game) {
    super(game, "Invasive Species", "Magic 2015 Core Set", "M15");
  }
}

module.exports = InvasiveSpecies;
