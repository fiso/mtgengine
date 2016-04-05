"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarDespair extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Despair", "Apocalypse", "APC");
  }
}

module.exports = PlanarDespair;
