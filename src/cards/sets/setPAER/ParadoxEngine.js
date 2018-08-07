"use strict";
const Constants = require ("../../../Constants");
const ParadoxEngineBase = require("../setAER/ParadoxEngine");

class ParadoxEngine extends ParadoxEngineBase {
  constructor (game) {
    super(game, "Paradox Engine", "Aether Revolt Promos", "PAER");
  }
}

module.exports = ParadoxEngine;
