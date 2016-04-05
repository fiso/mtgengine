"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarVoid extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Void", "Urza's Saga", "USG");
  }
}

module.exports = PlanarVoid;
