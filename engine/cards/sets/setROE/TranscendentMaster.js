"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TranscendentMaster extends Card {
  constructor(game) {
    super(game, "Transcendent Master", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TranscendentMaster;
