"use strict";
const Constants = require ("../../../Constants");
const ThriveBase = require("../setMM2/Thrive");

class Thrive extends ThriveBase {
  constructor (game) {
    super(game, "Thrive", "Dissension", "DIS");
  }
}

module.exports = Thrive;
