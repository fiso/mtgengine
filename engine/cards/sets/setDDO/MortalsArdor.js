"use strict";
const Constants = require ("../../../Constants");
const MortalsArdorBase = require("../setBNG/MortalsArdor");

class MortalsArdor extends MortalsArdorBase {
  constructor(game) {
    super(game, "Mortal's Ardor", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MortalsArdor;
