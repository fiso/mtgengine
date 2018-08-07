"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulNet extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Net", "Seventh Edition", "7ED");
  }
}

module.exports = SoulNet;
