"use strict";
const Constants = require ("../../../Constants");
const FreewindFalconBase = require("../setATH/FreewindFalcon");

class FreewindFalcon extends FreewindFalconBase {
  constructor(game) {
    super(game, "Freewind Falcon", "Visions", "VIS");
  }
}

module.exports = FreewindFalcon;
