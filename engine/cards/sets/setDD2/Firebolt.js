"use strict";
const Constants = require ("../../../Constants");
const FireboltBase = require("../setDD3_JVC/Firebolt");

class Firebolt extends FireboltBase {
  constructor(game) {
    super(game, "Firebolt", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Firebolt;
