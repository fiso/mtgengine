"use strict";
const Constants = require ("../../../Constants");
const ScuttlingDeathBase = require("../setMM2/ScuttlingDeath");

class ScuttlingDeath extends ScuttlingDeathBase {
  constructor (game) {
    super(game, "Scuttling Death", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ScuttlingDeath;
