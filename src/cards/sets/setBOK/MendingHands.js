"use strict";
const Constants = require ("../../../Constants");
const MendingHandsBase = require("../set9ED/MendingHands");

class MendingHands extends MendingHandsBase {
  constructor (game) {
    super(game, "Mending Hands", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MendingHands;
