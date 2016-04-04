"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InkwellLeviathanBase = require("../setCON/InkwellLeviathan.js");

class InkwellLeviathan extends InkwellLeviathanBase {
  constructor(game) {
    super(game, "Inkwell Leviathan", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = InkwellLeviathan;
