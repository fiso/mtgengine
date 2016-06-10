"use strict";
const Constants = require ("../../../Constants");
const ElvishSpiritGuideBase = require("../setALL/ElvishSpiritGuide");

class ElvishSpiritGuide extends ElvishSpiritGuideBase {
  constructor (game) {
    super(game, "Elvish Spirit Guide", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishSpiritGuide;
