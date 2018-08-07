"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulCharmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Charmer", "Prophecy", "PCY");
  }
}

module.exports = SoulCharmer;
