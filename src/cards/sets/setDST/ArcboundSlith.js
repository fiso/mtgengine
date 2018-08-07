"use strict";
const Constants = require ("../../../Constants");
const ArcboundSlithBase = require("../setHOP/ArcboundSlith");

class ArcboundSlith extends ArcboundSlithBase {
  constructor (game) {
    super(game, "Arcbound Slith", "Darksteel", "DST");
  }
}

module.exports = ArcboundSlith;
