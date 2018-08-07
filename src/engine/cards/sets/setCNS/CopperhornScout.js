"use strict";
const Constants = require ("../../../Constants");
const CopperhornScoutBase = require("../setCN2/CopperhornScout");

class CopperhornScout extends CopperhornScoutBase {
  constructor (game) {
    super(game, "Copperhorn Scout", "Conspiracy", "CNS");
  }
}

module.exports = CopperhornScout;
