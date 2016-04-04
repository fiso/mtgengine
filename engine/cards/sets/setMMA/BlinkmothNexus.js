"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlinkmothNexusBase = require("../setDST/BlinkmothNexus.js");

class BlinkmothNexus extends BlinkmothNexusBase {
  constructor(game) {
    super(game, "Blinkmoth Nexus", "Modern Masters", "MMA");
  }
}

module.exports = BlinkmothNexus;
