"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireballBase = require("../setATH/Fireball.js");

class Fireball extends FireballBase {
  constructor(game) {
    super(game, "Fireball", "Magic 2011", "M11");
  }
}

module.exports = Fireball;
