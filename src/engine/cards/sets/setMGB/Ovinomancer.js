"use strict";
const Constants = require ("../../../Constants");
const OvinomancerBase = require("../setTSB/Ovinomancer");

class Ovinomancer extends OvinomancerBase {
  constructor (game) {
    super(game, "Ovinomancer", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Ovinomancer;
