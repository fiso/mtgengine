"use strict";
const Constants = require ("../../../Constants");
const ElvishAberrationBase = require("../setpARL/ElvishAberration");

class ElvishAberration extends ElvishAberrationBase {
  constructor(game) {
    super(game, "Elvish Aberration", "Vintage Masters", "VMA");
  }
}

module.exports = ElvishAberration;
