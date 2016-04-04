"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PathrazerofUlamogBase = require("../setROE/PathrazerofUlamog.js");

class PathrazerofUlamog extends PathrazerofUlamogBase {
  constructor(game) {
    super(game, "Pathrazer of Ulamog", "WPN and Gateway", "pWPN");
  }
}

module.exports = PathrazerofUlamog;
