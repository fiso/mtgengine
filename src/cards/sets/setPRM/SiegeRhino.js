"use strict";
const Constants = require ("../../../Constants");
const SiegeRhinoBase = require("../setCP3/SiegeRhino");

class SiegeRhino extends SiegeRhinoBase {
  constructor (game) {
    super(game, "Siege Rhino", "Magic Online Promos", "PRM");
  }
}

module.exports = SiegeRhino;
