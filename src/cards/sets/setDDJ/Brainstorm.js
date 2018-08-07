"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setC18/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Brainstorm;
