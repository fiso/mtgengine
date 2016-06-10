"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrinsCodex extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrin's Codex", "Urza's Saga", "USG");
  }
}

module.exports = BarrinsCodex;
