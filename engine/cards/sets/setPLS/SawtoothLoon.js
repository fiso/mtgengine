"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SawtoothLoonBase = require("../setDDI/SawtoothLoon.js");

class SawtoothLoon extends SawtoothLoonBase {
  constructor(game) {
    super(game, "Sawtooth Loon", "Planeshift", "PLS");
  }
}

module.exports = SawtoothLoon;
