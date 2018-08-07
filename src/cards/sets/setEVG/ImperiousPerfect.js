"use strict";
const Constants = require ("../../../Constants");
const ImperiousPerfectBase = require("../setCMA/ImperiousPerfect");

class ImperiousPerfect extends ImperiousPerfectBase {
  constructor (game) {
    super(game, "Imperious Perfect", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = ImperiousPerfect;
