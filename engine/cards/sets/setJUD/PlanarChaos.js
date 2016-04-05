"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarChaos extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Chaos", "Judgment", "JUD");
  }
}

module.exports = PlanarChaos;
