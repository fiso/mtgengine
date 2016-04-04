"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spawnwrithe extends Card {
  constructor(game) {
    super(game, "Spawnwrithe", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Spawnwrithe;
