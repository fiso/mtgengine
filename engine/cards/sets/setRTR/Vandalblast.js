"use strict";
const Constants = require ("../../../Constants");
const VandalblastBase = require("../setC15/Vandalblast");

class Vandalblast extends VandalblastBase {
  constructor(game) {
    super(game, "Vandalblast", "Return to Ravnica", "RTR");
  }
}

module.exports = Vandalblast;
