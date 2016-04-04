"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CopperhornScoutBase = require("../setCNS/CopperhornScout.js");

class CopperhornScout extends CopperhornScoutBase {
  constructor(game) {
    super(game, "Copperhorn Scout", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CopperhornScout;
