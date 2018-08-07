"use strict";
const Constants = require ("../../../Constants");
const FireboltBase = require("../setDDS/Firebolt");

class Firebolt extends FireboltBase {
  constructor (game) {
    super(game, "Firebolt", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Firebolt;
