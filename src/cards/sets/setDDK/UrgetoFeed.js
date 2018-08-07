"use strict";
const Constants = require ("../../../Constants");
const UrgetoFeedBase = require("../setE02/UrgetoFeed");

class UrgetoFeed extends UrgetoFeedBase {
  constructor (game) {
    super(game, "Urge to Feed", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = UrgetoFeed;
