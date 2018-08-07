"use strict";
const Constants = require ("../../../Constants");
const GrindstoneBase = require("../setMPS/Grindstone");

class Grindstone extends GrindstoneBase {
  constructor (game) {
    super(game, "Grindstone", "Magic Online Promos", "PRM");
  }
}

module.exports = Grindstone;
