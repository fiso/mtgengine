"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarPortal extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Portal", "Eighth Edition", "8ED");
  }
}

module.exports = PlanarPortal;
