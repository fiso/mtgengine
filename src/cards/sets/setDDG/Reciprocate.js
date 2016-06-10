"use strict";
const Constants = require ("../../../Constants");
const ReciprocateBase = require("../setCHK/Reciprocate");

class Reciprocate extends ReciprocateBase {
  constructor (game) {
    super(game, "Reciprocate", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Reciprocate;
