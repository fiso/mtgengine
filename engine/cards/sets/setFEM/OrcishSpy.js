"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishSpyBase = require("../set8ED/OrcishSpy.js");

class OrcishSpy extends OrcishSpyBase {
  constructor(game) {
    super(game, "Orcish Spy", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishSpy;
