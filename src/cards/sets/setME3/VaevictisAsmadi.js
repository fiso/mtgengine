"use strict";
const Constants = require ("../../../Constants");
const VaevictisAsmadiBase = require("../setCHR/VaevictisAsmadi");

class VaevictisAsmadi extends VaevictisAsmadiBase {
  constructor (game) {
    super(game, "Vaevictis Asmadi", "Masters Edition III", "ME3");
  }
}

module.exports = VaevictisAsmadi;
