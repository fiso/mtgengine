"use strict";
const Constants = require ("../../../Constants");
const SylvanReclamationBase = require("../setCM2/SylvanReclamation");

class SylvanReclamation extends SylvanReclamationBase {
  constructor (game) {
    super(game, "Sylvan Reclamation", "You Make the Cube", "PZ2");
  }
}

module.exports = SylvanReclamation;
