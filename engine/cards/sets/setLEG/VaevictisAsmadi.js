"use strict";
const Constants = require ("../../../Constants");
const VaevictisAsmadiBase = require("../setCHR/VaevictisAsmadi");

class VaevictisAsmadi extends VaevictisAsmadiBase {
  constructor(game) {
    super(game, "Vaevictis Asmadi", "Legends", "LEG");
  }
}

module.exports = VaevictisAsmadi;
