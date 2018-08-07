"use strict";
const Constants = require ("../../../Constants");
const VaevictisAsmadiBase = require("../setME3/VaevictisAsmadi");

class VaevictisAsmadi extends VaevictisAsmadiBase {
  constructor (game) {
    super(game, "Vaevictis Asmadi", "Legends", "LEG");
  }
}

module.exports = VaevictisAsmadi;
