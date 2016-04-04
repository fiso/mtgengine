"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireballBase = require("../setATH/Fireball.js");

class Fireball extends FireballBase {
  constructor(game) {
    super(game, "Fireball", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Fireball;
