"use strict";
const Constants = require ("../../../Constants");
const ElvishSpiritGuideBase = require("../setME2/ElvishSpiritGuide");

class ElvishSpiritGuide extends ElvishSpiritGuideBase {
  constructor (game) {
    super(game, "Elvish Spirit Guide", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvishSpiritGuide;
