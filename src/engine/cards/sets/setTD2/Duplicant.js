"use strict";
const Constants = require ("../../../Constants");
const DuplicantBase = require("../setC18/Duplicant");

class Duplicant extends DuplicantBase {
  constructor (game) {
    super(game, "Duplicant", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Duplicant;
