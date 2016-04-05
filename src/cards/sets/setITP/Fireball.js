"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setATH/Fireball");

class Fireball extends FireballBase {
  constructor(game) {
    super(game, "Fireball", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Fireball;
