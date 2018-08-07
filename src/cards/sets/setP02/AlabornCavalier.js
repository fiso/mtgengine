"use strict";
const Constants = require ("../../../Constants");
const AlabornCavalierBase = require("../setDDG/AlabornCavalier");

class AlabornCavalier extends AlabornCavalierBase {
  constructor (game) {
    super(game, "Alaborn Cavalier", "Portal Second Age", "P02");
  }
}

module.exports = AlabornCavalier;
