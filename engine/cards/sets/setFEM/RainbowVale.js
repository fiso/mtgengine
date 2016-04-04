"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainbowVale extends UnimplementedCard {
  constructor(game) {
    super(game, "Rainbow Vale", "Fallen Empires", "FEM");
  }
}

module.exports = RainbowVale;
