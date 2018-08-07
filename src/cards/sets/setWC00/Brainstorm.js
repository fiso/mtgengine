"use strict";
const Constants = require ("../../../Constants");
const BrainstormBase = require("../setC18/Brainstorm");

class Brainstorm extends BrainstormBase {
  constructor (game) {
    super(game, "Brainstorm", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Brainstorm;
