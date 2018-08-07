"use strict";
const Constants = require ("../../../Constants");
const GriffinGuideBase = require("../setDDL/GriffinGuide");

class GriffinGuide extends GriffinGuideBase {
  constructor (game) {
    super(game, "Griffin Guide", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = GriffinGuide;
