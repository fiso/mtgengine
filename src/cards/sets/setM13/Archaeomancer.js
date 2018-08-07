"use strict";
const Constants = require ("../../../Constants");
const ArchaeomancerBase = require("../setC17/Archaeomancer");

class Archaeomancer extends ArchaeomancerBase {
  constructor (game) {
    super(game, "Archaeomancer", "Magic 2013", "M13");
  }
}

module.exports = Archaeomancer;
