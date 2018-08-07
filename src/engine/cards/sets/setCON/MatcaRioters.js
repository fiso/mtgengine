"use strict";
const Constants = require ("../../../Constants");
const MatcaRiotersBase = require("../setMM2/MatcaRioters");

class MatcaRioters extends MatcaRiotersBase {
  constructor (game) {
    super(game, "Matca Rioters", "Conflux", "CON");
  }
}

module.exports = MatcaRioters;
