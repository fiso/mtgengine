"use strict";
const Constants = require ("../../../Constants");
const BalduvianConjurerBase = require("../setICE/BalduvianConjurer");

class BalduvianConjurer extends BalduvianConjurerBase {
  constructor(game) {
    super(game, "Balduvian Conjurer", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianConjurer;
