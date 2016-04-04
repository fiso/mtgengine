"use strict";
const Constants = require ("../../../Constants");
const SiegeRhinoBase = require("../setKTK/SiegeRhino");

class SiegeRhino extends SiegeRhinoBase {
  constructor(game) {
    super(game, "Siege Rhino", "Prerelease Events", "pPRE");
  }
}

module.exports = SiegeRhino;
