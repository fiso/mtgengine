"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "River Merfolk", "Fallen Empires", "FEM");
  }
}

module.exports = RiverMerfolk;
