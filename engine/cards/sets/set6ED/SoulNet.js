"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulNet extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Net", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SoulNet;
