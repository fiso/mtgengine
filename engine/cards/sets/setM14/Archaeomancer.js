"use strict";
const Constants = require ("../../../Constants");
const ArchaeomancerBase = require("../setDDM/Archaeomancer");

class Archaeomancer extends ArchaeomancerBase {
  constructor(game) {
    super(game, "Archaeomancer", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Archaeomancer;
