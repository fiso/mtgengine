"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarGuide extends Card {
  constructor(game) {
    super(game, "Planar Guide", "Legions", "LGN");
  }
}

module.exports = PlanarGuide;
