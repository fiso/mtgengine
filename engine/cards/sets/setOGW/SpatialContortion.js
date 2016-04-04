"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpatialContortion extends Card {
  constructor(game) {
    super(game, "Spatial Contortion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SpatialContortion;
