"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostLitStalkerBase = require("../setDD3_GVL/GhostLitStalker.js");

class GhostLitStalker extends GhostLitStalkerBase {
  constructor(game) {
    super(game, "Ghost-Lit Stalker", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = GhostLitStalker;
