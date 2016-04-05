"use strict";
const Constants = require ("../../../Constants");
const BlinkmothNexusBase = require("../setDST/BlinkmothNexus");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor(game) {
    super(game, "Blinkmoth Nexus", "Modern Masters", "MMA");
  }
}

module.exports = BlinkmothNexus;
