"use strict";
const Constants = require ("../../../Constants");
const PathrazerofUlamogBase = require("../setROE/PathrazerofUlamog");

class PathrazerofUlamog extends PathrazerofUlamogBase {
  constructor (game) {
    super(game, "Pathrazer of Ulamog", "Magic Online Promos", "PRM");
  }
}

module.exports = PathrazerofUlamog;
