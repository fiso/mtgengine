"use strict";
const Constants = require ("../../../Constants");
const ParadoxEngineBase = require("../setAER/ParadoxEngine");

class ParadoxEngine extends ParadoxEngineBase {
  constructor (game) {
    super(game, "Paradox Engine", "Kaladesh Inventions", "MPS");
  }
}

module.exports = ParadoxEngine;
