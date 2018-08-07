"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Fireball;
