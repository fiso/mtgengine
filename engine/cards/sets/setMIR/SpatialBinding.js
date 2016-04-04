"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpatialBinding extends Card {
  constructor(game) {
    super(game, "Spatial Binding", "Mirage", "MIR");
  }
}

module.exports = SpatialBinding;
