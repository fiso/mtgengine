"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoodedHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooded Hydra", "Khans of Tarkir", "KTK");
  }
}

module.exports = HoodedHydra;
