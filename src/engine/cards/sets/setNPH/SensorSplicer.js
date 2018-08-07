"use strict";
const Constants = require ("../../../Constants");
const SensorSplicerBase = require("../setMM3/SensorSplicer");

class SensorSplicer extends SensorSplicerBase {
  constructor (game) {
    super(game, "Sensor Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = SensorSplicer;
