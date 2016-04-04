"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanWhispers extends Card {
  constructor(game) {
    super(game, "Krovikan Whispers", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanWhispers;
