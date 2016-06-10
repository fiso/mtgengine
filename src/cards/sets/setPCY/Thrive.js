"use strict";
const Constants = require ("../../../Constants");
const ThriveBase = require("../setDIS/Thrive");

class Thrive extends ThriveBase {
  constructor (game) {
    super(game, "Thrive", "Prophecy", "PCY");
  }
}

module.exports = Thrive;
