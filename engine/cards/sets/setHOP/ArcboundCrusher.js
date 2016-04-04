"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundCrusherBase = require("../setDST/ArcboundCrusher.js");

class ArcboundCrusher extends ArcboundCrusherBase {
  constructor(game) {
    super(game, "Arcbound Crusher", "Planechase", "HOP");
  }
}

module.exports = ArcboundCrusher;
