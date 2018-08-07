"use strict";
const Constants = require ("../../../Constants");
const OozeBase = require("../setTMM3/Ooze");

class Ooze extends OozeBase {
  constructor (game) {
    super(game, "Ooze", "Magic 2011 Tokens", "TM11");
  }
}

module.exports = Ooze;
