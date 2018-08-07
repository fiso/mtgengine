"use strict";
const Constants = require ("../../../Constants");
const EladamrisCallBase = require("../setA25/EladamrisCall");

class EladamrisCall extends EladamrisCallBase {
  constructor (game) {
    super(game, "Eladamri's Call", "Planeshift", "PLS");
  }
}

module.exports = EladamrisCall;
