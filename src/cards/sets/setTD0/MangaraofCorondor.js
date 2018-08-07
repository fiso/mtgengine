"use strict";
const Constants = require ("../../../Constants");
const MangaraofCorondorBase = require("../setBBD/MangaraofCorondor");

class MangaraofCorondor extends MangaraofCorondorBase {
  constructor (game) {
    super(game, "Mangara of Corondor", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = MangaraofCorondor;
