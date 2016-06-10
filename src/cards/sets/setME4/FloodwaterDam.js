"use strict";
const Constants = require ("../../../Constants");
const FloodwaterDamBase = require("../setALL/FloodwaterDam");

class FloodwaterDam extends FloodwaterDamBase {
  constructor (game) {
    super(game, "Floodwater Dam", "Masters Edition IV", "ME4");
  }
}

module.exports = FloodwaterDam;
