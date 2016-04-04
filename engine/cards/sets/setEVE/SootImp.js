"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SootImpBase = require("../setDD3_DVD/SootImp.js");

class SootImp extends SootImpBase {
  constructor(game) {
    super(game, "Soot Imp", "Eventide", "EVE");
  }
}

module.exports = SootImp;
