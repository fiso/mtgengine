"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShadowmageInfiltratorBase = require("../setMM2/ShadowmageInfiltrator.js");

class ShadowmageInfiltrator extends ShadowmageInfiltratorBase {
  constructor(game) {
    super(game, "Shadowmage Infiltrator", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = ShadowmageInfiltrator;
