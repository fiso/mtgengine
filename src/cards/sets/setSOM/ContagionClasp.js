"use strict";
const Constants = require ("../../../Constants");
const ContagionClaspBase = require("../setTD2/ContagionClasp");

class ContagionClasp extends ContagionClaspBase {
  constructor (game) {
    super(game, "Contagion Clasp", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ContagionClasp;
