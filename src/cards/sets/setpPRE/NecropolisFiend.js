"use strict";
const Constants = require ("../../../Constants");
const NecropolisFiendBase = require("../setCPK/NecropolisFiend");

class NecropolisFiend extends NecropolisFiendBase {
  constructor (game) {
    super(game, "Necropolis Fiend", "Prerelease Events", "pPRE");
  }
}

module.exports = NecropolisFiend;
