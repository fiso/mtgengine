"use strict";
const Constants = require ("../../../Constants");
const DistortingWakeBase = require("../setC14/DistortingWake");

class DistortingWake extends DistortingWakeBase {
  constructor (game) {
    super(game, "Distorting Wake", "Invasion", "INV");
  }
}

module.exports = DistortingWake;
