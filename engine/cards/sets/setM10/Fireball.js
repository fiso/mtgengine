"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireballBase = require("../setATH/Fireball.js");

class Fireball extends FireballBase {
  constructor(game) {
    super(game, "Fireball", "Magic 2010", "M10");
  }
}

module.exports = Fireball;
