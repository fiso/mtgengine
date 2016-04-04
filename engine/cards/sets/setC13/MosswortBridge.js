"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MosswortBridgeBase = require("../setARC/MosswortBridge.js");

class MosswortBridge extends MosswortBridgeBase {
  constructor(game) {
    super(game, "Mosswort Bridge", "Commander 2013 Edition", "C13");
  }
}

module.exports = MosswortBridge;
