"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Fireball;
