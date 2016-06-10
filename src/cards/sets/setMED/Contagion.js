"use strict";
const Constants = require ("../../../Constants");
const ContagionBase = require("../setALL/Contagion");

class Contagion extends ContagionBase {
  constructor (game) {
    super(game, "Contagion", "Masters Edition", "MED");
  }
}

module.exports = Contagion;
