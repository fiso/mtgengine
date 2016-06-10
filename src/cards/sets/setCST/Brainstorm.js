"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Brainstorm;
