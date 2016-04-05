"use strict";
const Constants = require ("../../../Constants");
const SmashtoSmithereensBase = require("../setORI/SmashtoSmithereens");

class SmashtoSmithereens extends SmashtoSmithereensBase {
  constructor(game) {
    super(game, "Smash to Smithereens", "Shadowmoor", "SHM");
  }
}

module.exports = SmashtoSmithereens;
