"use strict";
const Constants = require ("../../../Constants");
const ShadowmageInfiltratorBase = require("../setMM2/ShadowmageInfiltrator");

class ShadowmageInfiltrator extends ShadowmageInfiltratorBase {
  constructor(game) {
    super(game, "Shadowmage Infiltrator", "Odyssey", "ODY");
  }
}

module.exports = ShadowmageInfiltrator;
