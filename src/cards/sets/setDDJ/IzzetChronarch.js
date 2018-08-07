"use strict";
const Constants = require ("../../../Constants");
const IzzetChronarchBase = require("../setC17/IzzetChronarch");

class IzzetChronarch extends IzzetChronarchBase {
  constructor (game) {
    super(game, "Izzet Chronarch", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetChronarch;
