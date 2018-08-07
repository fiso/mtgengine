"use strict";
const Constants = require ("../../../Constants");
const BlinkmothNexusBase = require("../setMM2/BlinkmothNexus");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor (game) {
    super(game, "Blinkmoth Nexus", "World Championship Decks 2004", "WC04");
  }
}

module.exports = BlinkmothNexus;
