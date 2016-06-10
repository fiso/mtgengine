"use strict";
const Constants = require ("../../../Constants");
const SawtoothLoonBase = require("../setDDI/SawtoothLoon");

class SawtoothLoon extends SawtoothLoonBase {
  constructor (game) {
    super(game, "Sawtooth Loon", "Planeshift", "PLS");
  }
}

module.exports = SawtoothLoon;
