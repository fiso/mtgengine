"use strict";
const Constants = require ("../../../Constants");
const DeathgreeterBase = require("../setGVL/Deathgreeter");

class Deathgreeter extends DeathgreeterBase {
  constructor (game) {
    super(game, "Deathgreeter", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Deathgreeter;
