"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaDrakeBase = require("../setME2/SeaDrake.js");

class SeaDrake extends SeaDrakeBase {
  constructor(game) {
    super(game, "Sea Drake", "Portal Second Age", "PO2");
  }
}

module.exports = SeaDrake;
