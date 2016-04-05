"use strict";
const Constants = require ("../../../Constants");
const FireballBase = require("../setATH/Fireball");

class Fireball extends FireballBase {
  constructor(game) {
    super(game, "Fireball", "Collector's Edition", "CED");
  }
}

module.exports = Fireball;
