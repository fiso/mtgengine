"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Fireball;
