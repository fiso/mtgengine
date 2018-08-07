"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setBBD/Pacifism");

class Pacifism extends PacifismBase {
  constructor (game) {
    super(game, "Pacifism", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = Pacifism;
