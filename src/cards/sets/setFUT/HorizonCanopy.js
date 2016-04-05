"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorizonCanopy extends UnimplementedCard {
  constructor(game) {
    super(game, "Horizon Canopy", "Future Sight", "FUT");
  }
}

module.exports = HorizonCanopy;
