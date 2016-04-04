"use strict";
const Constants = require ("../../../Constants");
const GhostLitStalkerBase = require("../setDD3_GVL/GhostLitStalker");

class GhostLitStalker extends GhostLitStalkerBase {
  constructor(game) {
    super(game, "Ghost-Lit Stalker", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitStalker;
