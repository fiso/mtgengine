"use strict";
const Constants = require ("../../../Constants");
const ContagionClaspBase = require("../setDDF/ContagionClasp");

class ContagionClasp extends ContagionClaspBase {
  constructor(game) {
    super(game, "Contagion Clasp", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ContagionClasp;
