"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndlessWhispers extends Card {
  constructor(game) {
    super(game, "Endless Whispers", "Fifth Dawn", "5DN");
  }
}

module.exports = EndlessWhispers;
