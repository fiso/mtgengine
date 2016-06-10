"use strict";
const Constants = require ("../../../Constants");
const BlinkmothNexusBase = require("../setDST/BlinkmothNexus");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor (game) {
    super(game, "Blinkmoth Nexus", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BlinkmothNexus;
