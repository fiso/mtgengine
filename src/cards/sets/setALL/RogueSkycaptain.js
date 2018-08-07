"use strict";
const Constants = require ("../../../Constants");
const RogueSkycaptainBase = require("../setME2/RogueSkycaptain");

class RogueSkycaptain extends RogueSkycaptainBase {
  constructor (game) {
    super(game, "Rogue Skycaptain", "Alliances", "ALL");
  }
}

module.exports = RogueSkycaptain;
