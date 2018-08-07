"use strict";
const Constants = require ("../../../Constants");
const FloodwaterDamBase = require("../setME4/FloodwaterDam");

class FloodwaterDam extends FloodwaterDamBase {
  constructor (game) {
    super(game, "Floodwater Dam", "Alliances", "ALL");
  }
}

module.exports = FloodwaterDam;
