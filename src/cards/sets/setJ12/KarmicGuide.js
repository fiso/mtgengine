"use strict";
const Constants = require ("../../../Constants");
const KarmicGuideBase = require("../setCMA/KarmicGuide");

class KarmicGuide extends KarmicGuideBase {
  constructor (game) {
    super(game, "Karmic Guide", "Judge Gift Cards 2012", "J12");
  }
}

module.exports = KarmicGuide;
