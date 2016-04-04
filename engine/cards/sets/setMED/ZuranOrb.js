"use strict";
const Constants = require ("../../../Constants");
const ZuranOrbBase = require("../setV10/ZuranOrb");

class ZuranOrb extends ZuranOrbBase {
  constructor(game) {
    super(game, "Zuran Orb", "Masters Edition", "MED");
  }
}

module.exports = ZuranOrb;
