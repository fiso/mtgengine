"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperhornScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Copperhorn Scout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CopperhornScout;
