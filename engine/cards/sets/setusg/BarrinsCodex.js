"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrinsCodex extends Card {
  constructor(game) {
    super(game, "Barrin's Codex", "Urza's Saga", "USG");
  }
}

module.exports = BarrinsCodex;
