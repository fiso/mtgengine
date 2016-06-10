"use strict";
const Constants = require ("../../../Constants");
const PlanarCleansingBase = require("../setM10/PlanarCleansing");

class PlanarCleansing extends PlanarCleansingBase {
  constructor (game) {
    super(game, "Planar Cleansing", "Magic 2013", "M13");
  }
}

module.exports = PlanarCleansing;
