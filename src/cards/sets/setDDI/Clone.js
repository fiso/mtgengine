"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setM14/Clone");

class Clone extends CloneBase {
  constructor (game) {
    super(game, "Clone", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Clone;
