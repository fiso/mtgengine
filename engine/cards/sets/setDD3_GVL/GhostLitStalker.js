"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostLitStalker extends Card {
  constructor(game) {
    super(game, "Ghost-Lit Stalker", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = GhostLitStalker;
