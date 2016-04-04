"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishMechanicsBase = require("../setATQ/OrcishMechanics.js");

class OrcishMechanics extends OrcishMechanicsBase {
  constructor(game) {
    super(game, "Orcish Mechanics", "Masters Edition IV", "ME4");
  }
}

module.exports = OrcishMechanics;
