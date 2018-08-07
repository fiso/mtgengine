"use strict";
const Constants = require ("../../../Constants");
const SylvanReclamationBase = require("../setCM2/SylvanReclamation");

class SylvanReclamation extends SylvanReclamationBase {
  constructor (game) {
    super(game, "Sylvan Reclamation", "Commander 2016", "C16");
  }
}

module.exports = SylvanReclamation;
