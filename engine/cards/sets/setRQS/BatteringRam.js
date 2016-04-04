"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BatteringRamBase = require("../setATQ/BatteringRam.js");

class BatteringRam extends BatteringRamBase {
  constructor(game) {
    super(game, "Battering Ram", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = BatteringRam;
