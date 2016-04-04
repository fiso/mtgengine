"use strict";
const Constants = require ("../../../Constants");
const ArcboundCrusherBase = require("../setDST/ArcboundCrusher");

class ArcboundCrusher extends ArcboundCrusherBase {
  constructor(game) {
    super(game, "Arcbound Crusher", "Planechase", "HOP");
  }
}

module.exports = ArcboundCrusher;
