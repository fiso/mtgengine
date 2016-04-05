"use strict";
const Constants = require ("../../../Constants");
const GriffinGuideBase = require("../setDDH/GriffinGuide");

class GriffinGuide extends GriffinGuideBase {
  constructor(game) {
    super(game, "Griffin Guide", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GriffinGuide;
