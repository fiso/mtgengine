"use strict";
const Constants = require ("../../../Constants");
const ChimericMassBase = require("../setMM2/ChimericMass");

class ChimericMass extends ChimericMassBase {
  constructor(game) {
    super(game, "Chimeric Mass", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ChimericMass;
