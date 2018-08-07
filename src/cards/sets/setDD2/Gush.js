"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setJVC/Gush");

class Gush extends GushBase {
  constructor (game) {
    super(game, "Gush", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Gush;
