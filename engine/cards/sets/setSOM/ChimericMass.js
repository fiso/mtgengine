"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChimericMassBase = require("../setMM2/ChimericMass.js");

class ChimericMass extends ChimericMassBase {
  constructor(game) {
    super(game, "Chimeric Mass", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ChimericMass;
