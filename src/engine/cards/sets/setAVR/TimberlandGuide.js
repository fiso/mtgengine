"use strict";
const Constants = require ("../../../Constants");
const TimberlandGuideBase = require("../setIMA/TimberlandGuide");

class TimberlandGuide extends TimberlandGuideBase {
  constructor (game) {
    super(game, "Timberland Guide", "Avacyn Restored", "AVR");
  }
}

module.exports = TimberlandGuide;
