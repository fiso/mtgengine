"use strict";
const Constants = require ("../../../Constants");
const MosswortBridgeBase = require("../setC18/MosswortBridge");

class MosswortBridge extends MosswortBridgeBase {
  constructor (game) {
    super(game, "Mosswort Bridge", "Commander 2015", "C15");
  }
}

module.exports = MosswortBridge;
