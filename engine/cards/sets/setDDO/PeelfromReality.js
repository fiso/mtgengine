"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeelfromRealityBase = require("../setAVR/PeelfromReality.js");

class PeelfromReality extends PeelfromRealityBase {
  constructor(game) {
    super(game, "Peel from Reality", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PeelfromReality;
