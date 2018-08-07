"use strict";
const Constants = require ("../../../Constants");
const ElvishAberrationBase = require("../setDDU/ElvishAberration");

class ElvishAberration extends ElvishAberrationBase {
  constructor (game) {
    super(game, "Elvish Aberration", "Conspiracy", "CNS");
  }
}

module.exports = ElvishAberration;
