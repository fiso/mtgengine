"use strict";
const Constants = require ("../../../Constants");
const OozeBase = require("../setTMM3/Ooze");

class Ooze extends OozeBase {
  constructor (game) {
    super(game, "Ooze", "Rise of the Eldrazi Tokens", "TROE");
  }
}

module.exports = Ooze;
