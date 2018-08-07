"use strict";
const Constants = require ("../../../Constants");
const KarmicGuideBase = require("../setCMA/KarmicGuide");

class KarmicGuide extends KarmicGuideBase {
  constructor (game) {
    super(game, "Karmic Guide", "Commander 2013", "C13");
  }
}

module.exports = KarmicGuide;
