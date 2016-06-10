"use strict";
const Constants = require ("../../../Constants");
const AlabornCavalierBase = require("../setDDG/AlabornCavalier");

class AlabornCavalier extends AlabornCavalierBase {
  constructor (game) {
    super(game, "Alaborn Cavalier", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornCavalier;
