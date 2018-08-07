"use strict";
const Constants = require ("../../../Constants");
const SiegeRhinoBase = require("../setCP3/SiegeRhino");

class SiegeRhino extends SiegeRhinoBase {
  constructor (game) {
    super(game, "Siege Rhino", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = SiegeRhino;
