"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KherKeepBase = require("../setC13/KherKeep.js");

class KherKeep extends KherKeepBase {
  constructor(game) {
    super(game, "Kher Keep", "Time Spiral", "TSP");
  }
}

module.exports = KherKeep;
