"use strict";
const Constants = require ("../../../Constants");
const BlueElementalBlastBase = require("../setCED/BlueElementalBlast");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor (game) {
    super(game, "Blue Elemental Blast", "Revised Edition", "3ED");
  }
}

module.exports = BlueElementalBlast;
