"use strict";
const Constants = require ("../../../Constants");
const KarmicGuideBase = require("../setCMA/KarmicGuide");

class KarmicGuide extends KarmicGuideBase {
  constructor (game) {
    super(game, "Karmic Guide", "Urza's Legacy", "ULG");
  }
}

module.exports = KarmicGuide;
