"use strict";
const Constants = require ("../../../Constants");
const BalduvianConjurerBase = require("../setME2/BalduvianConjurer");

class BalduvianConjurer extends BalduvianConjurerBase {
  constructor (game) {
    super(game, "Balduvian Conjurer", "Ice Age", "ICE");
  }
}

module.exports = BalduvianConjurer;
