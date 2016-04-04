"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireblastBase = require("../setDD3_JVC/Fireblast.js");

class Fireblast extends FireblastBase {
  constructor(game) {
    super(game, "Fireblast", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Fireblast;
