"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrenkoMobBoss extends Card {
  constructor(game) {
    super(game, "Krenko, Mob Boss", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkoMobBoss;
