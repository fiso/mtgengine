"use strict";
const Constants = require ("../../../Constants");
const ElvishAberrationBase = require("../setDDU/ElvishAberration");

class ElvishAberration extends ElvishAberrationBase {
  constructor (game) {
    super(game, "Elvish Aberration", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvishAberration;
