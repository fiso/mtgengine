"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodwaterDamBase = require("../setALL/FloodwaterDam.js");

class FloodwaterDam extends FloodwaterDamBase {
  constructor(game) {
    super(game, "Floodwater Dam", "Masters Edition IV", "ME4");
  }
}

module.exports = FloodwaterDam;
