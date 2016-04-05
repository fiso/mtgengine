"use strict";
const Constants = require ("../../../Constants");
const ArcboundSlithBase = require("../setDST/ArcboundSlith");

class ArcboundSlith extends ArcboundSlithBase {
  constructor(game) {
    super(game, "Arcbound Slith", "Planechase", "HOP");
  }
}

module.exports = ArcboundSlith;
