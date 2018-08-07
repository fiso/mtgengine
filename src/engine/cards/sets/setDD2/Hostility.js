"use strict";
const Constants = require ("../../../Constants");
const HostilityBase = require("../setCM2/Hostility");

class Hostility extends HostilityBase {
  constructor (game) {
    super(game, "Hostility", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Hostility;
