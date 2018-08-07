"use strict";
const Constants = require ("../../../Constants");
const MosswortBridgeBase = require("../setC18/MosswortBridge");

class MosswortBridge extends MosswortBridgeBase {
  constructor (game) {
    super(game, "Mosswort Bridge", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = MosswortBridge;
