"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WardenofGeometries extends Card {
  constructor(game) {
    super(game, "Warden of Geometries", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WardenofGeometries;
