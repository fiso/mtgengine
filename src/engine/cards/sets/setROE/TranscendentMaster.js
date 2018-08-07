"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranscendentMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Transcendent Master", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TranscendentMaster;
