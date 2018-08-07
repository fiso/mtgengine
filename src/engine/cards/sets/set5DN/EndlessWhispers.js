"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessWhispers extends UnimplementedCard {
  constructor (game) {
    super(game, "Endless Whispers", "Fifth Dawn", "5DN");
  }
}

module.exports = EndlessWhispers;
