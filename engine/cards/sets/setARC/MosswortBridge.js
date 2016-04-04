"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MosswortBridge extends Card {
  constructor(game) {
    super(game, "Mosswort Bridge", "Archenemy", "ARC");
  }
}

module.exports = MosswortBridge;
