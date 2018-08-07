"use strict";
const Constants = require ("../../../Constants");
const HonorablePassageBase = require("../setTSB/HonorablePassage");

class HonorablePassage extends HonorablePassageBase {
  constructor (game) {
    super(game, "Honorable Passage", "World Championship Decks 1997", "WC97");
  }
}

module.exports = HonorablePassage;
