"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContagionClaspBase = require("../setDDF/ContagionClasp.js");

class ContagionClasp extends ContagionClaspBase {
  constructor(game) {
    super(game, "Contagion Clasp", "Friday Night Magic", "pFNM");
  }
}

module.exports = ContagionClasp;
