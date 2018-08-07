"use strict";
const Constants = require ("../../../Constants");
const SeaDrakeBase = require("../setVMA/SeaDrake");

class SeaDrake extends SeaDrakeBase {
  constructor (game) {
    super(game, "Sea Drake", "Masters Edition II", "ME2");
  }
}

module.exports = SeaDrake;
