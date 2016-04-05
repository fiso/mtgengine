"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChemistersTrick extends UnimplementedCard {
  constructor(game) {
    super(game, "Chemister's Trick", "Return to Ravnica", "RTR");
  }
}

module.exports = ChemistersTrick;
