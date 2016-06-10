"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor (game) {
    super(game, "Pacifism", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Pacifism;
