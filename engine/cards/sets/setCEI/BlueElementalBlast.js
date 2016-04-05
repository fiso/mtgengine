"use strict";
const Constants = require ("../../../Constants");
const BlueElementalBlastBase = require("../setCED/BlueElementalBlast");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor(game) {
    super(game, "Blue Elemental Blast", "International Collector's Edition", "CEI");
  }
}

module.exports = BlueElementalBlast;
