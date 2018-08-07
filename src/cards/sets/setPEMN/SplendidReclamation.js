"use strict";
const Constants = require ("../../../Constants");
const SplendidReclamationBase = require("../setEMN/SplendidReclamation");

class SplendidReclamation extends SplendidReclamationBase {
  constructor (game) {
    super(game, "Splendid Reclamation", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SplendidReclamation;
