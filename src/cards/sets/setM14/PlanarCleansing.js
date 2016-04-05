"use strict";
const Constants = require ("../../../Constants");
const PlanarCleansingBase = require("../setM10/PlanarCleansing");

class PlanarCleansing extends PlanarCleansingBase {
  constructor(game) {
    super(game, "Planar Cleansing", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PlanarCleansing;
