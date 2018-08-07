"use strict";
const Constants = require ("../../../Constants");
const ColdEyedSelkieBase = require("../setC18/ColdEyedSelkie");

class ColdEyedSelkie extends ColdEyedSelkieBase {
  constructor (game) {
    super(game, "Cold-Eyed Selkie", "Eventide", "EVE");
  }
}

module.exports = ColdEyedSelkie;
