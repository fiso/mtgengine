"use strict";
const Constants = require ("../../../Constants");
const SimianSpiritGuideBase = require("../setA25/SimianSpiritGuide");

class SimianSpiritGuide extends SimianSpiritGuideBase {
  constructor (game) {
    super(game, "Simian Spirit Guide", "Planar Chaos", "PLC");
  }
}

module.exports = SimianSpiritGuide;
