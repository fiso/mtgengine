"use strict";
const Constants = require ("../../../Constants");
const SeaDrakeBase = require("../setVMA/SeaDrake");

class SeaDrake extends SeaDrakeBase {
  constructor (game) {
    super(game, "Sea Drake", "Portal Second Age", "P02");
  }
}

module.exports = SeaDrake;
