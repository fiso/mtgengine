"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Fireball;
