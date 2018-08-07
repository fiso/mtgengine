"use strict";
const Constants = require ("../../../Constants");
const ShadowmageInfiltratorBase = require("../setA25/ShadowmageInfiltrator");

class ShadowmageInfiltrator extends ShadowmageInfiltratorBase {
  constructor (game) {
    super(game, "Shadowmage Infiltrator", "Magic Online Promos", "PRM");
  }
}

module.exports = ShadowmageInfiltrator;
