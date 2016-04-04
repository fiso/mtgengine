"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DistortingWakeBase = require("../setC14/DistortingWake.js");

class DistortingWake extends DistortingWakeBase {
  constructor(game) {
    super(game, "Distorting Wake", "Invasion", "INV");
  }
}

module.exports = DistortingWake;
