"use strict";
const Constants = require ("../../../Constants");
const GhostLitRaiderBase = require("../setSOK/GhostLitRaider");

class GhostLitRaider extends GhostLitRaiderBase {
  constructor (game) {
    super(game, "Ghost-Lit Raider", "Magic Online Promos", "PRM");
  }
}

module.exports = GhostLitRaider;
