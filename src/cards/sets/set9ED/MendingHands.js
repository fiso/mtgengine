"use strict";
const Constants = require ("../../../Constants");
const MendingHandsBase = require("../setBOK/MendingHands");

class MendingHands extends MendingHandsBase {
  constructor (game) {
    super(game, "Mending Hands", "Ninth Edition", "9ED");
  }
}

module.exports = MendingHands;
