"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathgreeterBase = require("../setDD3_GVL/Deathgreeter.js");

class Deathgreeter extends DeathgreeterBase {
  constructor(game) {
    super(game, "Deathgreeter", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Deathgreeter;
