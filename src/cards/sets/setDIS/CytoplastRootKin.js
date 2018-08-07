"use strict";
const Constants = require ("../../../Constants");
const CytoplastRootKinBase = require("../setMM2/CytoplastRootKin");

class CytoplastRootKin extends CytoplastRootKinBase {
  constructor (game) {
    super(game, "Cytoplast Root-Kin", "Dissension", "DIS");
  }
}

module.exports = CytoplastRootKin;
