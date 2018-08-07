"use strict";
const Constants = require ("../../../Constants");
const MosswortBridgeBase = require("../setC18/MosswortBridge");

class MosswortBridge extends MosswortBridgeBase {
  constructor (game) {
    super(game, "Mosswort Bridge", "Commander 2016", "C16");
  }
}

module.exports = MosswortBridge;
