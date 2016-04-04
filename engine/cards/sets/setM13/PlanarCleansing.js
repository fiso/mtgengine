"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlanarCleansingBase = require("../setM10/PlanarCleansing.js");

class PlanarCleansing extends PlanarCleansingBase {
  constructor(game) {
    super(game, "Planar Cleansing", "Magic 2013", "M13");
  }
}

module.exports = PlanarCleansing;
