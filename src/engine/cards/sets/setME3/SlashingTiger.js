"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlashingTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Slashing Tiger", "Masters Edition III", "ME3");
  }
}

module.exports = SlashingTiger;
