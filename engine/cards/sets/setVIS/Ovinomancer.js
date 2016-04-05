"use strict";
const Constants = require ("../../../Constants");
const OvinomancerBase = require("../setMGB/Ovinomancer");

class Ovinomancer extends OvinomancerBase {
  constructor(game) {
    super(game, "Ovinomancer", "Visions", "VIS");
  }
}

module.exports = Ovinomancer;
