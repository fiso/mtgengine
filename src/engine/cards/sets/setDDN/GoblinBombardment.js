"use strict";
const Constants = require ("../../../Constants");
const GoblinBombardmentBase = require("../setTPR/GoblinBombardment");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor (game) {
    super(game, "Goblin Bombardment", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = GoblinBombardment;
