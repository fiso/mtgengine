"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setIMA/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Fireball;
