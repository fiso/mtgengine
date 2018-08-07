"use strict";
const Constants = require ("../../../Constants");
const ThriveBase = require("../setMM2/Thrive");

class Thrive extends ThriveBase {
  constructor (game) {
    super(game, "Thrive", "Prophecy", "PCY");
  }
}

module.exports = Thrive;
