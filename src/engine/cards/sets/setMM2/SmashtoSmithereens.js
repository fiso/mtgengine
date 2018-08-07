"use strict";
const Constants = require ("../../../Constants");
const SmashtoSmithereensBase = require("../setF16/SmashtoSmithereens");

class SmashtoSmithereens extends SmashtoSmithereensBase {
  constructor (game) {
    super(game, "Smash to Smithereens", "Modern Masters 2015", "MM2");
  }
}

module.exports = SmashtoSmithereens;
