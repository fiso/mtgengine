"use strict";
const Constants = require ("../../../Constants");
const ContagionClaspBase = require("../setTD2/ContagionClasp");

class ContagionClasp extends ContagionClaspBase {
  constructor (game) {
    super(game, "Contagion Clasp", "Friday Night Magic 2011", "F11");
  }
}

module.exports = ContagionClasp;
