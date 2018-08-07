"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setVMA/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Psychatog;
