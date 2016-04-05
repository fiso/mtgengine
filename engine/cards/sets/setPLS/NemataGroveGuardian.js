"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NemataGroveGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Nemata, Grove Guardian", "Planeshift", "PLS");
  }
}

module.exports = NemataGroveGuardian;
