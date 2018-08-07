"use strict";
const Constants = require ("../../../Constants");
const ArcboundCrusherBase = require("../setHOP/ArcboundCrusher");

class ArcboundCrusher extends ArcboundCrusherBase {
  constructor (game) {
    super(game, "Arcbound Crusher", "Darksteel", "DST");
  }
}

module.exports = ArcboundCrusher;
