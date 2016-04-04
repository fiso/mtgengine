"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishFarmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Farmer", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishFarmer;
