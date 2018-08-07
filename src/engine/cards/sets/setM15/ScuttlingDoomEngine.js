"use strict";
const Constants = require ("../../../Constants");
const ScuttlingDoomEngineBase = require("../setC18/ScuttlingDoomEngine");

class ScuttlingDoomEngine extends ScuttlingDoomEngineBase {
  constructor (game) {
    super(game, "Scuttling Doom Engine", "Magic 2015", "M15");
  }
}

module.exports = ScuttlingDoomEngine;
