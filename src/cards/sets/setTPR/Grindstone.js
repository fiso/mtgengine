"use strict";
const Constants = require ("../../../Constants");
const GrindstoneBase = require("../setTMP/Grindstone");

class Grindstone extends GrindstoneBase {
  constructor(game) {
    super(game, "Grindstone", "Tempest Remastered", "TPR");
  }
}

module.exports = Grindstone;
