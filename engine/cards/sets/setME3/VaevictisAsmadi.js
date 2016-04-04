"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VaevictisAsmadiBase = require("../setCHR/VaevictisAsmadi.js");

class VaevictisAsmadi extends VaevictisAsmadiBase {
  constructor(game) {
    super(game, "Vaevictis Asmadi", "Masters Edition III", "ME3");
  }
}

module.exports = VaevictisAsmadi;
