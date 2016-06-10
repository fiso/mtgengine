"use strict";
const Constants = require ("../../../Constants");
const RogueSkycaptainBase = require("../setALL/RogueSkycaptain");

class RogueSkycaptain extends RogueSkycaptainBase {
  constructor (game) {
    super(game, "Rogue Skycaptain", "Masters Edition II", "ME2");
  }
}

module.exports = RogueSkycaptain;
