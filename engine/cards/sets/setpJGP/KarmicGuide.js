"use strict";
const Constants = require ("../../../Constants");
const KarmicGuideBase = require("../setC13/KarmicGuide");

class KarmicGuide extends KarmicGuideBase {
  constructor(game) {
    super(game, "Karmic Guide", "Judge Gift Program", "pJGP");
  }
}

module.exports = KarmicGuide;
