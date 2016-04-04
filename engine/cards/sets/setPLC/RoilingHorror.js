"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilingHorror extends Card {
  constructor(game) {
    super(game, "Roiling Horror", "Planar Chaos", "PLC");
  }
}

module.exports = RoilingHorror;
