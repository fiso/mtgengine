"use strict";
const Constants = require ("../../../Constants");
const ScuttlingDoomEngineBase = require("../setC18/ScuttlingDoomEngine");

class ScuttlingDoomEngine extends ScuttlingDoomEngineBase {
  constructor (game) {
    super(game, "Scuttling Doom Engine", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ScuttlingDoomEngine;
