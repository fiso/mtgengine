"use strict";
const Constants = require ("../../../Constants");
const PlanarCleansingBase = require("../setM14/PlanarCleansing");

class PlanarCleansing extends PlanarCleansingBase {
  constructor (game) {
    super(game, "Planar Cleansing", "Magic 2010", "M10");
  }
}

module.exports = PlanarCleansing;
