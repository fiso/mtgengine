"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setATH/Fireball");

class Fireball extends FireballBase {
  constructor (game) {
    super(game, "Fireball", "Unlimited Edition", "2ED");
  }
}

module.exports = Fireball;
