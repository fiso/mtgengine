"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostLitStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost-Lit Stalker", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = GhostLitStalker;
