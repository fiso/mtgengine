"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarPortal extends Card {
  constructor(game) {
    super(game, "Planar Portal", "Eighth Edition", "8ED");
  }
}

module.exports = PlanarPortal;
