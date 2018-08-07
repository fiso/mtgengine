"use strict";
const Constants = require ("../../../Constants");
const KrosanReclamationBase = require("../setWC03/KrosanReclamation");

class KrosanReclamation extends KrosanReclamationBase {
  constructor (game) {
    super(game, "Krosan Reclamation", "Judgment", "JUD");
  }
}

module.exports = KrosanReclamation;
