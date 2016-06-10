"use strict";
const Constants = require ("../../../Constants");
const SylvanMessengerBase = require("../setAPC/SylvanMessenger");

class SylvanMessenger extends SylvanMessengerBase {
  constructor (game) {
    super(game, "Sylvan Messenger", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SylvanMessenger;
