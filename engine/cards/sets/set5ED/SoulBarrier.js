"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Barrier", "Fifth Edition", "5ED");
  }
}

module.exports = SoulBarrier;
