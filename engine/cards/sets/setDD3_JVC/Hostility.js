"use strict";
const Constants = require ("../../../Constants");
const HostilityBase = require("../setC15/Hostility");

class Hostility extends HostilityBase {
  constructor(game) {
    super(game, "Hostility", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Hostility;
