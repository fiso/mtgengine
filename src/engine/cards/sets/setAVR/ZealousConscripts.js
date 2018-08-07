"use strict";
const Constants = require ("../../../Constants");
const ZealousConscriptsBase = require("../setMM3/ZealousConscripts");

class ZealousConscripts extends ZealousConscriptsBase {
  constructor (game) {
    super(game, "Zealous Conscripts", "Avacyn Restored", "AVR");
  }
}

module.exports = ZealousConscripts;
