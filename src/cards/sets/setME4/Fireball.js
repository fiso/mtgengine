"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setATH/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Masters Edition IV", "ME4");
  }
}

module.exports = Fireball;
