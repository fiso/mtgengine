"use strict";
const Constants = require ("../../../Constants");
const SootImpBase = require("../setDVD/SootImp");

class SootImp extends SootImpBase {
  constructor (game) {
    super(game, "Soot Imp", "Eventide", "EVE");
  }
}

module.exports = SootImp;
