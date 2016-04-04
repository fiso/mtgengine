"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GriffinGuideBase = require("../setDDH/GriffinGuide.js");

class GriffinGuide extends GriffinGuideBase {
  constructor(game) {
    super(game, "Griffin Guide", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GriffinGuide;
