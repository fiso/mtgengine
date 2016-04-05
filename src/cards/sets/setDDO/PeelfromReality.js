"use strict";
const Constants = require ("../../../Constants");
const PeelfromRealityBase = require("../setAVR/PeelfromReality");

class PeelfromReality extends PeelfromRealityBase {
  constructor(game) {
    super(game, "Peel from Reality", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PeelfromReality;
