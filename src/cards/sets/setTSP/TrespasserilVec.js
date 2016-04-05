"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrespasserilVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Trespasser il-Vec", "Time Spiral", "TSP");
  }
}

module.exports = TrespasserilVec;
