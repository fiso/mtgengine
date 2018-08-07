"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSpike extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Spike", "Coldsnap", "CSP");
  }
}

module.exports = SoulSpike;
