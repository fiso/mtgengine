"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setDD3_JVC/Gush");

class Gush extends GushBase {
  constructor (game) {
    super(game, "Gush", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Gush;
