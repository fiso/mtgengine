"use strict";
const Constants = require ("../../../Constants");
const SelflessCatharBase = require("../setISD/SelflessCathar");

class SelflessCathar extends SelflessCatharBase {
  constructor(game) {
    super(game, "Selfless Cathar", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SelflessCathar;
