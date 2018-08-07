"use strict";
const Constants = require ("../../../Constants");
const ContagionBase = require("../setMED/Contagion");

class Contagion extends ContagionBase {
  constructor (game) {
    super(game, "Contagion", "Alliances", "ALL");
  }
}

module.exports = Contagion;
