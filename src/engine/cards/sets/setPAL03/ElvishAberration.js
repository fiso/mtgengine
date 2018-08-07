"use strict";
const Constants = require ("../../../Constants");
const ElvishAberrationBase = require("../setDDU/ElvishAberration");

class ElvishAberration extends ElvishAberrationBase {
  constructor (game) {
    super(game, "Elvish Aberration", "Arena League 2003", "PAL03");
  }
}

module.exports = ElvishAberration;
