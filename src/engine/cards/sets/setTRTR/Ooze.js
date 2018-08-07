"use strict";
const Constants = require ("../../../Constants");
const OozeBase = require("../setTMM3/Ooze");

class Ooze extends OozeBase {
  constructor (game) {
    super(game, "Ooze", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Ooze;
