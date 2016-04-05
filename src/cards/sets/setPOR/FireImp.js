"use strict";
const Constants = require ("../../../Constants");
const FireImpBase = require("../setME4/FireImp");

class FireImp extends FireImpBase {
  constructor(game) {
    super(game, "Fire Imp", "Portal", "POR");
  }
}

module.exports = FireImp;
