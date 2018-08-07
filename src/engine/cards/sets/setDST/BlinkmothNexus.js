"use strict";
const Constants = require ("../../../Constants");
const BlinkmothNexusBase = require("../setMM2/BlinkmothNexus");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor (game) {
    super(game, "Blinkmoth Nexus", "Darksteel", "DST");
  }
}

module.exports = BlinkmothNexus;
