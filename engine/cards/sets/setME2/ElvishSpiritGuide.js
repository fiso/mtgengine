"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishSpiritGuideBase = require("../setALL/ElvishSpiritGuide.js");

class ElvishSpiritGuide extends ElvishSpiritGuideBase {
  constructor(game) {
    super(game, "Elvish Spirit Guide", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishSpiritGuide;
