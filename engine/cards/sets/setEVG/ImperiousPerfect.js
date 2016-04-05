"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setpCMP/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor(game) {
    super(game, "Imperious Perfect", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ImperiousPerfect;
