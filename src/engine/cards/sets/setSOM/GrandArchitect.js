"use strict";
const Constants = require ("../../../Constants");
const GrandArchitectBase = require("../setTD2/GrandArchitect");

class GrandArchitect extends GrandArchitectBase {
  constructor (game) {
    super(game, "Grand Architect", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GrandArchitect;
