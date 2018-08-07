"use strict";
const Constants = require ("../../../Constants");
const BlinkmothNexusBase = require("../setMM2/BlinkmothNexus");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor (game) {
    super(game, "Blinkmoth Nexus", "Modern Masters", "MMA");
  }
}

module.exports = BlinkmothNexus;
