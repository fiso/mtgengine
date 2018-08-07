"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Fireball;
