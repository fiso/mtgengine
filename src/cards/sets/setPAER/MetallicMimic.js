"use strict";
const Constants = require ("../../../Constants");
const MetallicMimicBase = require("../setAER/MetallicMimic");

class MetallicMimic extends MetallicMimicBase {
  constructor (game) {
    super(game, "Metallic Mimic", "Aether Revolt Promos", "PAER");
  }
}

module.exports = MetallicMimic;
