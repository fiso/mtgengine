"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclicalEvolution extends UnimplementedCard {
  constructor(game) {
    super(game, "Cyclical Evolution", "Future Sight", "FUT");
  }
}

module.exports = CyclicalEvolution;
