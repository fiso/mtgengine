"use strict";
const Constants = require ("../../../Constants");
const KherKeepBase = require("../setC13/KherKeep");

class KherKeep extends KherKeepBase {
  constructor(game) {
    super(game, "Kher Keep", "Time Spiral", "TSP");
  }
}

module.exports = KherKeep;
