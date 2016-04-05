"use strict";
const Constants = require ("../../../Constants");
const ScarsoftheVeteranBase = require("../setALL/ScarsoftheVeteran");

class ScarsoftheVeteran extends ScarsoftheVeteranBase {
  constructor(game) {
    super(game, "Scars of the Veteran", "Masters Edition II", "ME2");
  }
}

module.exports = ScarsoftheVeteran;
