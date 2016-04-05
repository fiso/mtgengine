"use strict";
const Constants = require ("../../../Constants");
const ElvishAberrationBase = require("../setpARL/ElvishAberration");

class ElvishAberration extends ElvishAberrationBase {
  constructor(game) {
    super(game, "Elvish Aberration", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ElvishAberration;
