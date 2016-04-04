"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireboltBase = require("../setDD3_JVC/Firebolt.js");

class Firebolt extends FireboltBase {
  constructor(game) {
    super(game, "Firebolt", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Firebolt;
