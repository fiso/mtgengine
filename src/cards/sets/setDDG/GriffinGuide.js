"use strict";
const Constants = require ("../../../Constants");
const GriffinGuideBase = require("../setDDH/GriffinGuide");

class GriffinGuide extends GriffinGuideBase {
  constructor (game) {
    super(game, "Griffin Guide", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = GriffinGuide;
