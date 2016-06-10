"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MosswortBridge extends UnimplementedCard {
  constructor (game) {
    super(game, "Mosswort Bridge", "Archenemy", "ARC");
  }
}

module.exports = MosswortBridge;
