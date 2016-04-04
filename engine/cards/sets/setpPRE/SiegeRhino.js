"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SiegeRhinoBase = require("../setKTK/SiegeRhino.js");

class SiegeRhino extends SiegeRhinoBase {
  constructor(game) {
    super(game, "Siege Rhino", "Prerelease Events", "pPRE");
  }
}

module.exports = SiegeRhino;
