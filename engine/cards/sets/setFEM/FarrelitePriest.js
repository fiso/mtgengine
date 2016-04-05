"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarrelitePriest extends UnimplementedCard {
  constructor(game) {
    super(game, "Farrelite Priest", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelitePriest;
