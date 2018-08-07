"use strict";
const Constants = require ("../../../Constants");
const ExhumeBase = require("../setPD3/Exhume");

class Exhume extends ExhumeBase {
  constructor (game) {
    super(game, "Exhume", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Exhume;
