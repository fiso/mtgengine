"use strict";
const Constants = require ("../../../Constants");
const SylvanMessengerBase = require("../setORI/SylvanMessenger");

class SylvanMessenger extends SylvanMessengerBase {
  constructor (game) {
    super(game, "Sylvan Messenger", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = SylvanMessenger;
