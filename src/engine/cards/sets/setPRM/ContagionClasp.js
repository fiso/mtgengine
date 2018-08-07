"use strict";
const Constants = require ("../../../Constants");
const ContagionClaspBase = require("../setTD2/ContagionClasp");

class ContagionClasp extends ContagionClaspBase {
  constructor (game) {
    super(game, "Contagion Clasp", "Magic Online Promos", "PRM");
  }
}

module.exports = ContagionClasp;
