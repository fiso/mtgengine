"use strict";
const Constants = require ("../../../Constants");
const OrcishSpyBase = require("../set8ED/OrcishSpy");

class OrcishSpy extends OrcishSpyBase {
  constructor(game) {
    super(game, "Orcish Spy", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishSpy;
