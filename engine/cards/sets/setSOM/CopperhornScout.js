"use strict";
const Constants = require ("../../../Constants");
const CopperhornScoutBase = require("../setCNS/CopperhornScout");

class CopperhornScout extends CopperhornScoutBase {
  constructor(game) {
    super(game, "Copperhorn Scout", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CopperhornScout;
