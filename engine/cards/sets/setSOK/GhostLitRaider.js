"use strict";
const Constants = require ("../../../Constants");
const GhostLitRaiderBase = require("../setpREL/GhostLitRaider");

class GhostLitRaider extends GhostLitRaiderBase {
  constructor(game) {
    super(game, "Ghost-Lit Raider", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitRaider;
