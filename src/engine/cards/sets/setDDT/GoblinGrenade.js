"use strict";
const Constants = require ("../../../Constants");
const GoblinGrenadeBase = require("../setMTGA/GoblinGrenade");

class GoblinGrenade extends GoblinGrenadeBase {
  constructor (game) {
    super(game, "Goblin Grenade", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinGrenade;
