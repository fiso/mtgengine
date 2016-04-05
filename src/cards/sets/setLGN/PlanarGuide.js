"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Guide", "Legions", "LGN");
  }
}

module.exports = PlanarGuide;
